const 
    testMenuWrapper = document.getElementById('testMenuWrapper'),
    loading = document.getElementById('loading'),
    testBoxClass = document.getElementsByClassName("testBox"),
    apiUrl = 'https://api.myjson.com/bins/fkzhk',

    loadTests = () =>{
        let testDivBox = '';

        loading.classList.remove('invisible');
        fetch(apiUrl)
            .then((resp)=>resp.text())
            .then((resp)=>JSON.parse(resp))
            .then((response)=>{
                response.map((entry, i)=>{
                    let 
                        testDivLabel = `<h3>${entry.name}</h3>`,
                        testDivResult = `<h4 class="resultScore">Score: ${localStorage[entry.name] || "not started"}</h4>`;
                        testDivBox += `<div class="testBox" key="${i}">${testDivLabel+testDivResult}</div>`;
                })
                testMenuWrapper.innerHTML = testDivBox;
                loading.classList.add('invisible');
                testMenuWrapper.classList.remove('invisible');
                
                [].forEach.call(testBoxClass, (testBox)=>{
                    testBox.onclick = (e) =>{
                        const target = e.target.className != "testBox"?
                            e.target.parentNode
                        :
                            e.target
                        ;
                        testMenuWrapper.classList.add("invisible");
                        testScreen(response[target.attributes.key.nodeValue]);
                    };
                });
            });
    };

