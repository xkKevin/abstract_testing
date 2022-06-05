var account_data = {}

function updateRecords(account, paper_url, abstract_sentences, account_answers, right_answers, answer_result){
    if (account_data[account] === undefined){
        account_data[account] = []
    }
    account_data[account].push({
        num: account_data[account].length + 1,
        paper_url,
        abstract_sentences,
        right_answers, 
        account_answers, 
        answer_result
    })
}

function computedAccuracy(account){
    let all_num = account_data[account].length
    let right_num = account_data[account].filter( a=>  a.answer_result ).length
    let wrong_num = all_num - right_num
    return {
        account_info: {
            all_num,
            right_num,
            wrong_num
        },
        account_details: account_data[account]
    }
}

function downLoadFiles(data, fileName){
    if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
        //兼容ie10
        var blob = new Blob([JSON.stringify(data)], {
            type: "data:application/json;charset=utf-8"
        });
        navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        const a = document.createElement("a");
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        var blobs = new Blob([JSON.stringify(data)], {
            type: "data:application/json;charset=utf-8"
        });
        var objurl = URL.createObjectURL(blobs);
        a.href = objurl;
        // a.href = "data:application/json;charset=utf-8" + JSON.stringify(data, null, 2);  // 使用这种方式会导出文件失败net error，原因在于协议不同无法跨域
        a.download = fileName;
        a.click();
        document.body.removeChild(a);
    }
}

function downloadF(account){
    downLoadFiles(account_data[account], "results.json")
}

export {updateRecords, computedAccuracy, downloadF}