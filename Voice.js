class AudioPlayer {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.bufferQueue = [];
        this.isPlaying = false;
        this.sourceNode = null;
        this.isBuffering = false;
    }

    addToQueue(fragment) {
        this.bufferQueue.push(fragment);
        if (!this.isPlaying && !this.isBuffering) {
            this.playNextFragment();
        }
    }

    async playNextFragment() {
        if (this.bufferQueue.length === 0) {
            this.isPlaying = false;
            return;
        }

        this.isBuffering = true;

        const fragment = this.bufferQueue.shift();

        try {
        
            const audioBuffer = await this.audioContext.decodeAudioData(fragment);

            this.sourceNode = this.audioContext.createBufferSource();
            this.sourceNode.buffer = audioBuffer;
            this.sourceNode.connect(this.audioContext.destination);
            this.sourceNode.loop = false;

            this.sourceNode.onended = () => {
                this.isBuffering = false;
                this.playNextFragment();
            };

            this.sourceNode.start();
            this.isPlaying = true;
        } catch (error) {
            console.error('Błąd podczas dekodowania fragmentu:', error);
            this.isBuffering = false;
        }
    }

    stop() {
        if (this.sourceNode) {
            this.sourceNode.stop();
        }
        this.bufferQueue = [];
        this.isPlaying = false;
    }
}
