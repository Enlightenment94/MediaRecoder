class Pipe {
    transform(chunk) {
        const byteArray = new Uint8Array(chunk);        
        const base64String = btoa(String.fromCharCode(...byteArray));        
        return base64String;
    }

    untransform(chunk) {
        const base64String = chunk;
        
        const binaryString = atob(base64String);
        
        const byteArray = new Uint8Array(binaryString.length);
        
        for (let i = 0; i < binaryString.length; i++) {
            byteArray[i] = binaryString.charCodeAt(i);
        }

        return byteArray.buffer;
    }
}