const sSection = {
    id1 = 1,
    id2 = 2,
    id3 = 3
};


fetch(section)
    .then((response)) => {
        if(!response.ok){
            throw new Error(`Erro ao carregar página, Status: ${response.status}`);
        }

        return response.blob();
    })

    .then((response) => {        
        if(response = document.getElementById(`${sSection.id1}`)){

        }

    });
