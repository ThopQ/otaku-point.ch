<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import WelcomeHero from "@/Components/Otaku-Point/WelcomeHero.vue";
import WelcomeDescription from "@/Components/Otaku-Point/WelcomeDescription.vue";
import WelcomeFooter from "@/Components/Otaku-Point/WelcomeFooter.vue";
import RegisterForm from "@/Components/Otaku-Point/RegisterForm.vue";
import ContactCard from "@/Components/Otaku-Point/ContactCard.vue";
import ImpressumModal from "@/Components/Otaku-Point/ImpressumModal.vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

defineProps({
    impressumModal: Boolean,
});

const contacts = ref([
    {
        name: "Thomas Iseli",
        age: 23,
        imageSrc: "/media/thomas-iseli.jpg",
        job: "Informatiker EFZ",
        favManga: "Berserk",
        favAnime: "Kimi no Na wa",
        hobbies: ["Anime/Manga 🍥", "Lesen 📖", "Klavier 🎹", "Code 👨🏻‍💻"],
    },
    {
        name: "Kevin Kölliker",
        age: 31,
        job: "Application Engineer",
        imageSrc: "/media/kevin-koelliker.jpg",
        favManga: "One Piece",
        favAnime: "Demon Slayer",
        hobbies: [
            "Anime/Manga 🎌",
            "Fussball ⚽",
            "Euphonium im Orchester 🎶",
            "Skifahren ⛷️",
            "Tauchen 🐟",
        ],
    },
]);
</script>

<template>
    <Head title="❤️-lich Willkommen" />

    <main>
        <section
            class="min-h-screen w-full flex flex-col sm:grid sm:place-content-center pt-12 sm:pt-0 gap-4 sm:gap-12"
        >
            <welcome-hero></welcome-hero>

            <register-form></register-form>

            <div class="absolute bottom-5 w-full text-center">
                <a href="#contact" class="btn btn-ghost animate-bounce">
                    <ChevronDownIcon
                        class="h-6 w-6 stroke-current"
                    ></ChevronDownIcon>
                </a>
            </div>
        </section>

        <section
            class="min-h-screen w-full grid place-content-center"
            id="contact"
        >
            <div
                class="container flex flex-col lg:flex-row gap-12 pt-12 lg:pt-0"
            >
                <contact-card
                    v-for="(contact, index) in contacts"
                    :key="index"
                    :contact="contact"
                ></contact-card>
            </div>

            <welcome-description></welcome-description>
        </section>
    </main>

    <welcome-footer></welcome-footer>
    <Transition name="slide-fade">
        <impressum-modal
            v-if="impressumModal"
            :is-open="impressumModal"
        ></impressum-modal
    ></Transition>
</template>

<style scoped>
.slide-fade-leave-active,
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}
</style>
