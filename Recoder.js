class Recoder {
    constructor(onDataCallback) {
        this.mediaRecorder = null;
        this.onDataCallback = onDataCallback;
        this.audioChunks = [];
    }

    async start() {        
        console.log(navigator.mediaDevices)
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        //this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
                this.audioChunks.push(event.data);
                if (this.onDataCallback) {
                    this.onDataCallback(event.data);
                }
            }
        };
        this.mediaRecorder.start(100);
    }

    async stop() {
        return new Promise((resolve, reject) => {
            if (!this.mediaRecorder) {
                reject("Nagrywanie nie zostało rozpoczęte.");
                return;
            }
            this.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
                resolve(audioBlob);
            };
            this.mediaRecorder.stop();
        });
    }
}