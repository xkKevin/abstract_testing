<template>
<div id="abstract_result">
    <el-table :data="account_details" style="width: 100%">
        <el-table-column prop="paper_url" label="paper_url">
        </el-table-column>
        <el-table-column prop="abstract_sentences" label="abstract_sentences">
        </el-table-column>
        <el-table-column prop="account_answers" label="account_answers">
        </el-table-column>
        <el-table-column prop="right_answers" label="right_answers">
        </el-table-column>
        <el-table-column prop="answer_result" label="answer_result">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    name: "abstract_result",
    data() {
        return {
            account_details: [],
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style>
</style>
