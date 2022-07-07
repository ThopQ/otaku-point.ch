<script setup>
defineProps({
    contact: Object,
});
</script>

<template>
    <div class="shadow-xl w-full h-auto bg-base-200 rounded-xl">
        <div class="card-body flex flex-col md:flex-row gap-4">
            <div class="avatar">
                <div
                    class="rounded-xl w-32 md:w-40 lg:w-44 h-full rounded-xl shadow-xl -translate-y-12 md:-translate-y-16"
                >
                    <img :src="contact.imageSrc" :alt="contact.name" />
                </div>
            </div>
            <div>
                <h2 class="card-title">{{ contact.name }}</h2>

                <p>{{ contact.job }}</p>
                <p>Alter: {{ contact.age }} Jahre</p>
                <p class="mt-3">
                    Lieblings-Manga:
                    <span class="font-bold">{{ contact.favManga }}</span>
                </p>
                <p>
                    Lieblings-Anime:
                    <span class="font-bold">{{ contact.favAnime }}</span>
                </p>

                <div class="mt-5">
                    <p>Hobbies:</p>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div
                            v-for="(hobby, index) in contact.hobbies"
                            :key="index"
                            class="badge badge-primary"
                        >
                            {{ hobby }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
