var favKul = new Firebase('https://fendi.firebaseio.com/nyobi1')

function saveToList(event) {
    if (event.which == 13 || event.keyCode == 13) { // as the user presses the enter key, we will attempt to save the data
    var namaKuliah = document.getElementById('namaKuliah').value.trim();
    if (namaKuliah.length > 0) {
        simpanFB(namaKuliah);
//    var li = '<li>' + namaKuliah + '</li>';
        }     
        document.getElementById('namaKuliah').value = '';
        return false;
    }   
};

function simpanFB(namaKuliah) {
    favKul.push({
        name: namaKuliah
    });
};

function refreshUI(list) {
    var lis = '';
    for (var i = 0; i < list.length; i++){
        lis += '<li data-key="' + list[i].key + '">' + list[i].name + '</li>';
        };
        document.getElementById('favKul').innerHTML = lis;
};

//this will get fired on initial load as well as whenever there is a change in the data
favKul.on("value", function(snapshot) {
    var data = snapshot.val();
    var list = [];
    for(var key in data) {
        if(data.hasOwnProperty(key)) {
            name = data[key].name ? data[key].name : '';
                if(name.trim().length > 0) {
                list.push({
                    name: name,
                    key: key 
                })
            }
        }
    }
    //refresh ui
    refreshUI(list);
});
