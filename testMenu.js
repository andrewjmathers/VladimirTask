const 
    testMenuWrapper = document.getElementById('testMenuWrapper'),
    loading = document.getElementById('loading'),
    testBoxClass = document.getElementsByClassName("testBox"),
    apiUrl = 'https://api.myjson.com/bins/fkzhk',

    loadTests = () =>{
        testMenuWrapper.innerHTML = "";
        loading.classList.remove('invisible');
        fetch(apiUrl)
            .then((resp)=>resp.text())
            .then((resp)=>JSON.parse(resp))
            .then((response)=>{
                response.map((entry, i)=>{
                    let 
                        testDivBox = document.createElement("div"),
                        testDivLabel = document.createElement("h3"),
                        testDivResult = document.createElement("h4");

                    testDivLabel.innerHTML = entry.name;
                    testDivResult.innerHTML = `Score: ${localStorage[entry.name] || "not started"}`;
                    
                    testDivBox.setAttribute("key", i);

                    testDivBox.classList.add("testBox");
                    testDivResult.classList.add("resultScore");

                    testDivBox.appendChild(testDivResult);
                    testDivBox.appendChild(testDivLabel);
                    testMenuWrapper.appendChild(testDivBox);
                })
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

