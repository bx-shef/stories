<script setup lang="ts">
import { computed, useSlots, ref } from 'vue';
import MarkdownIt from 'markdown-it';
import MicrophoneOnIcon from '@bitrix24/b24icons-vue/main/MicrophoneOnIcon'

const md = new MarkdownIt();
const props = defineProps<{
	lang: string;
}>();

const slots = useSlots();
const rate = ref(1);
// <input type="range" v-model="rate" min="0.1" max="2" step="0.1" />

const renderedHtml = computed(() => {
	const slotContent = (slots.default?.()[0].children || '') as string;
	return md.render(slotContent)
		//.split('.').map((line) => line.length > 0 ? `<p>${line}</p>`: '').join("\n");
});

const speakText = () => {
	const text = md.render((slots.default?.()[0].children || '') as string).replace(/(<([^>]+)>)/gi, "")
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = props.lang;
	if(utterance.lang === 'en-US')
	{
		utterance.rate = 0.7
	}
	else if(utterance.lang === 'ru-RU')
	{
		utterance.rate = 1.2
	}
	//utterance.rate = rate.value;
	
	speechSynthesis.getVoices();
	
	if(utterance.lang === 'ru-RU')
	{
		const ruVoiceList = speechSynthesis.getVoices().filter(
			voice => voice.lang === props.lang
		)
		
		const googleVoice = ruVoiceList.find(
			voice => voice.voiceURI === 'Google русский'
		) || null;
		
		if(null === googleVoice)
		{
			utterance.rate = 0.8
			utterance.voice = speechSynthesis.getVoices().find(
				voice => voice.lang === props.lang
			) || null;
		}
		else
		{
			utterance.rate = 1.2
			utterance.voice = googleVoice;
		}
	}
	else
	{
		utterance.voice = speechSynthesis.getVoices().find(
			voice => voice.lang === props.lang
		) || null;
	}
	
	speechSynthesis.speak(utterance);
};
</script>

<template>
	<div class="flex flex-nowrap flex-row gap-x-4 items-center justify-start">
		<button
			@click="speakText"
			class="print:hidden"
		>
			<MicrophoneOnIcon class="size-10" />
		</button>
		<div v-html="renderedHtml"></div>
	</div>
</template>