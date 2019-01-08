const 
    testMenuWrapper = document.getElementById('testMenuWrapper'),
    loading = document.getElementById('loading'),
    apiUrl = 'https://api.myjson.com/bins/11s7v4',

    loadTests = () =>{
        loading.classList.remove('invisible');
        fetch(apiUrl)
            .then((resp)=>resp.text())
            .then((resp)=>JSON.parse(resp))
            .then((response)=>{
                response.map((entry)=>{
                    let 
                        testDivBox = document.createElement("div"),
                        testDivLabel = document.createElement("h3");

                    testDivLabel.innerHTML = entry.name;
                    testDivBox.classList.add("testBox");
                    testDivBox.appendChild(testDivLabel);
                    testMenuWrapper.appendChild(testDivBox);
                })
            loading.classList.add('invisible');
            testMenuWrapper.classList.remove('invisible');
            });
    };