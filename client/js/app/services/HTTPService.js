class HTTPService {
    get(url) {
        return new Promise((resolve, reject) => {
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
        });
    }

    post(url, dado) {
        return new Promise((resolve, reject) => {
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
        });
    }
}
