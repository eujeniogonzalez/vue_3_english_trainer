<template>
    <div class="word_trainer">
        <div class="word_trainer_new_word">
            <div>{{ newWord.value }}</div>
            <div 
                class="answer_status" 
                :class="{
                    wrong: !correctness.status,
                    correct: correctness.status,
                    hidden: !answer,
                    visible: answer
                }">
                    {{ correctness.value }}
            </div>
            <!-- <div class="answer_status wrong">Wrong</div> -->
        </div>
        <div class="word_trainer_answers">

            <template v-for="translation in translations" :key="translation.value">
                
                <div
                    class="answer_button"
                    @click="checkAnswer(translation)"
                    :class="{
                        wrong: answer && newWord.translate !== translation,
                        correct: answer && newWord.translate === translation
                    }">
                        {{ translation }}
                </div>

            </template>

            <div class="skip_button" @click="skipAnswer()">{{ skipButtonValue }}</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            newWord: {
                value: '',
                translate: ''
            },
            translations: [],
            answer: false,
            correctness: {
                status: false,
                value: ''
            },
            skipButtonValue: 'Пропустить',
            newCurrentCount: 0,
            newTotalCount: 0
        }
    },
    methods: {
        checkAnswer(value) {
            if (!this.answer) {
                
                this.answer = true
                this.skipButtonValue = 'Следующее слово'

                if (this.newWord.translate === value) {
                    // Correct answer
                    this.correctness.status = true
                    this.correctness.value = 'Correct'
                    this.newCurrentCount++
                    this.$emit('newWoprdCounters', {
                        newTotalCount: this.newTotalCount,
                        newCurrentCount: this.newCurrentCount
                    })
                } else {
                    // Wrong answer
                    this.correctness.status = false
                    this.correctness.value = 'Wrong'
                }
            }
        },
        skipAnswer() {
            axios
            .get('https://vue.codepracticum.ru/api/random/')
            .then(response => (
                    this.answer = false,
                    this.translations = [],
                    this.skipButtonValue = 'Пропустить',
                    this.newTotalCount = response.data.words_count,
                    this.$emit('newWoprdCounters', {
                        newTotalCount: this.newTotalCount,
                        newCurrentCount: this.newCurrentCount
                    }),
                    this.newWord.value = response.data.new_word.word_name,
                    this.newWord.translate = response.data.new_word.word_translate,
                    this.translations = response.data.translations
                )
            ),
            this.$emit('updateParent', {amount: this.amount})
        }
    },
    mounted() {
        axios
        .get('https://vue.codepracticum.ru/api/random/')
        .then(response => (
                this.newTotalCount = response.data.words_count,
                this.$emit('newWoprdCounters', {
                    newTotalCount: this.newTotalCount,
                    newCurrentCount: this.newCurrentCount
                }),
                this.newWord.value = response.data.new_word.word_name,
                this.newWord.translate = response.data.new_word.word_translate,
                this.translations = response.data.translations
            )
        )
    }
}
</script>

<style scoped>
.word_trainer {
    margin: 20px 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(68, 68, 68, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.word_trainer_new_word {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    position: relative;
}
.answer_status {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
}
.correct {
    color: var(--main-color);
}
.wrong {
    color: coral;
}
.visible {
    display: block;
}
.hidden {
    display: none;
}
.word_trainer_answers .answer_button, .word_trainer_answers .skip_button {
    height: 50px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
}
.word_trainer_answers .answer_button {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
}

@media (min-width: 700px) {
    .word_trainer {
        width: 100%;
        max-width: 680px;
        margin: 20px auto;
    }
    .word_trainer_answers {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .word_trainer_answers .answer_button, .word_trainer_answers .skip_button {
        margin: 5px;
    }
}
</style>