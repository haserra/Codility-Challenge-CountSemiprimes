// JavaScript source code


function renderChallengeUI(codilityLessonTitle, codilityTaskTitle) {
    document.title = `${codilityLessonTitle} - ${codilityTaskTitle}`;
    //verify if all required components exist
    let dashboard = document.querySelector('#codility-training-center');
    let inputDataContents = document.querySelector('#input-data-contents');
    let outputDataContents = document.querySelector('#output-data-contents');
    let runTask = document.querySelector('#run-task');

    if (!dashboard) {
        dashboard = document.createElement('div');
        dashboard.setAttribute('id', 'codility-training-center');
        dashboard.setAttribute('class', 'dashboard_padding');
        dashboard.innerHTML = `<div><h1>${codilityLessonTitle}</h1></div>`;
        dashboard.innerHTML += '<br />';
        dashboard.innerHTML += `<div><h2>${codilityTaskTitle}</h2></div>`;
        document.body.appendChild(dashboard);
    }
    if (!inputDataContents) {
        inputDataContents = document.createElement('div');
        inputDataContents.setAttribute('id', 'input-data-contents');
        inputDataContents.setAttribute('class', 'input_data_contents_padding');
        /*inputDataContents.textContent = 'Input: <br /><br />';*/
        inputDataContents.innerHTML = 'Input: <br /><br />';
        dashboard.appendChild(inputDataContents);
    }
    if (!outputDataContents) {
        outputDataContents = document.createElement('div');
        outputDataContents.setAttribute('id', 'output-data-contents');
        outputDataContents.setAttribute('class', 'output_data_contents_padding');
        outputDataContents.innerHTML = 'Output: <br /><br />';
        dashboard.appendChild(outputDataContents);
    }
    //document.title = `${codilityLessonTitle} - ${codilityTaskTitle}`;
    // just a button to reload the page
    if (!runTask) {
        runTask = document.createElement('input');
        runTask.setAttribute('name', 'run_task');
        runTask.setAttribute('type', 'button');
        runTask.setAttribute('value', 'Run Task');
        runTask.textContent = 'Run Task';
        runTask.addEventListener('click', function () {
            //window.location = 'CountFactors.html';
            window.location.reload();
        });
        dashboard.appendChild(runTask);
    }
}

function writeOutputData(data, target) {
    let outputDataContents = document.querySelector('#' + target + '-data-contents');
    if (Array.isArray(data)) {
        //alert('Need to write down array data');
        data.forEach(function (x) {
            outputDataContents.innerHTML += x + ', ';
        });
    } else if (typeof data === 'number') {
        //alert('need to write down a whole number ');
        outputDataContents.innerHTML += data;

    } else {
        alert('Exception!');
        outputDataContents.innerHTML += 'Error - cannot write results. ';
    }
}