<template>
<div id="abstract_test">
    <el-input v-model="paper_url" placeholder="Copy a paper's url" @keyup.enter.native="searchPaper">
        <template slot="prepend">Paper URL</template>
        <el-button slot="append" icon="el-icon-search" @click="searchPaper">Search</el-button>
    </el-input>

    <div v-loading="loading" element-loading-text="Test is generating..." element-loading-spinner="el-icon-loading" style="min-height: 80px;">

        <draggable v-model="test_sentences" @change="drag_change" handle=".handle" style="margin: 25px 0;">
            <transition-group>
                <div style="margin: 6px 0;" v-for="(sentence, index) in test_sentences" :key=index>
                    <i class="el-icon-rank handle" style="cursor: move;"></i>
                    <span style="margin-left: 12px;">{{sentence}}</span>
                </div>
            </transition-group>
        </draggable>

        <el-input v-model="user_answers" v-show="anwsers.length > 0" @keyup.enter.native="submitAnswers" :disabled="true">
            <template slot="prepend">Move <i class="el-icon-rank handle"></i> to rearrange these seentences.</template>
            <el-button slot="append" icon="el-icon-upload2" @click="submitAnswers">Submit</el-button>
        </el-input>

        <p v-show="show_answer" style="margin-left: 20px;">{{answer_result}}</p>
        <div v-show="show_answer">
            <p>The correct answers: {{anwsers}}</p>
            <!-- <el-button type="primary" plain @click="nextPaper">Next Paper</el-button> -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "abstract_test",
    props: ['account'],
    data() {
        return {
            loading: false,
            paper_url: null,
            account_info: {},
            test_sentences: [],
            anwsers: "",
            user_answers: "",
            show_answer: false,
            answer_result: '',
        }
    },
    methods: {
        submitAnswers() {
            if (this.answer_result === '') {
                let ua = this.user_answers.toUpperCase().replace(/[,.;\s|-]/g, '')
                let ra = this.anwsers.replace(/\s/g, '')
                if (ua.length < ra.length) {
                    this.$message('Please complete your answers first!');
                } else {
                    let result = false
                    if (ua === ra) {
                        this.answer_result = 'Congratulations, you are right.';
                        result = true
                    } else {
                        this.answer_result = 'What a pity, you are wrong.';
                    }
                    updateRecords(this.account, this.paper_url, this.test_sentences, this.user_answers, this.anwsers, result)
                    this.show_answer = true
                    this.account_info = computedAccuracy(this.account).account_info
                }
            } else {
                this.$message('Please do not submit again!');
            }
        },
        randomNumber() {
            // randomNumber(a,b) 返回的值大于 0 ，则 b 在 a 的前边；
            // randomNumber(a,b) 返回的值等于 0 ，则a 、b 位置保持不变；
            // randomNumber(a,b) 返回的值小于 0 ，则 a 在 b 的前边。
            return 0.5 - Math.random()
        },
        drag_change(args) {
            // console.log(args);
            this.user_answers = this.test_sentences.map(s => s[0]).join(" ")
        },
        generateTest(abstract) {
            let sentences = abstract.replace(/\n\s?|\s+/g, " ").slice(0, -1).split(". ").map((s) => s.trim() + '.')
            let sentence_len = sentences.length
            let number_arr = Array.from({
                length: sentence_len
            }, (v, k) => k);
            number_arr.sort(this.randomNumber)
            let new_sentences = []
            number_arr.forEach((value, key) => {
                new_sentences.push({
                    sentence: String.fromCharCode(65 + key) + ': ' + sentences[value], // sentences[value], 
                    sequence_s: String.fromCharCode(65 + key),
                    sequence_n: value
                })
            })
            this.test_sentences = new_sentences.map(s => s.sentence)
            this.user_answers = this.test_sentences.map(s => s[0]).join(" ")
            new_sentences.sort((a, b) => a.sequence_n - b.sequence_n)
            return new_sentences.map(v => v.sequence_s)
        },
        requestPaper(url) {
            let that = this
            axios
                .get(url)
                .then(function (res) {
                    // 获取网页数据
                    // console.log(res);
                    let $ = cheerio.load(res.data)
                    let data = $("div.ng2-app").prev().text()
                    eval(data + ';window.xplGlobal=xplGlobal;')
                    // console.log(window.xplGlobal); 
                    let abstract = cheerio.load(`<div id="abstract">${window.xplGlobal.document.metadata.abstract}</div>`)("div#abstract").text()
                    that.anwsers = that.generateTest(abstract).join(" ")
                    that.loading = false
                })
                .catch(function (err) {
                    console.log('failed', err);
                    that.$message.error("Failed to parse the Paper Abstract of the URL!")
                    that.loading = false
                });
        },
        searchPaper() {
            this.test_sentences = []
            this.user_answers = ""
            this.show_answer = false
            this.answer_result = ''
            this.loading = true

            let p_url = new URL(this.paper_url)
            let p_api = ''
            if (p_url.hostname.endsWith("doi.org")) {
                p_api = '/doi'
            } else if (p_url.hostname.endsWith("ieee.org")) {
                p_api = '/ieee'
            } else {
                this.$message.error("Please input a right url!")
                return;
            }
            this.requestPaper(p_api + p_url.pathname)
            // this.requestPaper(this.paper_url)

        },
    },
    mounted() {}
}
</script>

<style>
</style>
