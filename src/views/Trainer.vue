<template>
    <ProgressBar :wordCounters="wordCounters" />
    <WordTrainer @newWoprdCounters="updateWordCounters" />
</template>

<script>
import ProgressBar from "../components/ProgressBar.vue"
import WordTrainer from "../components/WordTrainer.vue"

export default {
    components: {
        ProgressBar,
        WordTrainer
    },
    data() {
        return {
            wordCounters: {
                totalCount: '',
                currentCount: 0,
                scaleFillness: 0
            }
        }
    },
    methods: {
        updateWordCounters(dataCounters) {
            this.wordCounters.totalCount = dataCounters.newTotalCount
            this.wordCounters.currentCount = dataCounters.newCurrentCount
            this.wordCounters.scaleFillness = (dataCounters.newCurrentCount*100/dataCounters.newTotalCount)
        }
    }
}
</script>
