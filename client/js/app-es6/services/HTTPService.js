export class HTTPService {

    #handleErrors(resposta) {
        if (!resposta.ok) throw new Error(resposta.statusText);
        
        return resposta;
    }

    get(url) {
        return fetch(url)
        .then(resposta => this.#handleErrors(resposta))
        .then(resposta => resposta.json());

        //A fecth API simplifica muito as coisas. Dá uma olhada no código usando XMLHttpRequest():

        /*return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
    
            xhr.open('GET', url);
    
            xhr.onreadystatechange = () => { 
    
                if(xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }
    
            }
    
            xhr.send();
        });*/
    }

    post(url, dado) {
        return fetch(url, {
            headers: { 'Content-type' : 'application/json' },
            method: 'post',
            body: JSON.stringify(dado),
        })
        .then(resposta => this.#handleErrors(resposta));
        
        //.then(resposta => this.#handleErrors(resposta));
        
        /*return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
    
            xhr.open('Post', url, true);
            
            xhr.setRequestHeader('Content-Type', 'application/JSON');

            xhr.onreadystatechange = () => {

                if(xhr.readyState === 4) {
                    if(xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.responseText);
                    }
                }

            }

            xhr.send(JSON.stringify(dado));
        });*/
    }
}
