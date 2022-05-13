<template>
    <div class="progress_bar">
        <div class="progress_bar_values">
            <div class="progress_bar_value_level">Intermediate</div>
            <div class="progress_bar_value_counter">
                <div class="current">{{ wordCounters.currentCount }}</div>
                <div class="total">/{{ wordCounters.totalCount }}</div>
            </div>
        </div>

        <div class="progress_bar_scale">
            <div class="progress_bar_scale_background">
                <div
                    class="progress_bar_scale_fill"
                    v-bind:style="{ width: wordCounters.scaleFillness + '%' }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['wordCounters'],
    data() {
        return {
            scaleFillnes: 0
        }
    }
}
</script>

<style scoped>
.progress_bar {
    height: 50px;
    margin: 20px 10px 0 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(68, 68, 68, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.progress_bar_values {
    display: flex;
    margin: 0 10px 5px 10px;
    justify-content: space-between;
    font-size: 12px;
}
.progress_bar_value_counter {
    display: flex;
    position: relative;
}
.progress_bar_value_counter .total {
    color: #e5e5e5;
}
.progress_bar_scale {
    margin: 0 10px;
}
.progress_bar_scale_background {
    height: 5px;
    background-color: #f6f6f6;
    border-radius: 5px;
}
.progress_bar_scale_fill {
    height: 5px;
    background-color: var(--main-color);
    border-radius: 5px;
}

@media (min-width: 700px) {
    .progress_bar {
        width: 100%;
        max-width: 680px;
        margin: 20px auto 0 auto;
    }
}
</style>