<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<template>
    <footer
        class="footer p-10 bg-neutral text-neutral-content sm:grid sm:place-items-center"
    >
        <div>
            <span class="footer-title">Social</span>

            <a
                href="https://facebook.com/OtakuPointSwitzerland"
                target="_blank"
                class="link link-hover"
            >
                Facebook
            </a>
            <a
                href="https://www.linkedin.com/in/kevin-koelliker-0b8151164/"
                target="_blank"
                class="link link-hover"
            >
                Kevin Kölliker
            </a>
            <a
                href="https://www.linkedin.com/in/thomas-iseli-440a5b1a6/"
                target="_blank"
                class="link link-hover"
            >
                Thomas Iseli
            </a>
        </div>
        <div>
            <span class="footer-title">Otaku-Point</span>
            <Link
                :href="route('impressum')"
                class="link link-hover"
                preserve-state
                preserve-scroll
            >
                Impressum
            </Link>
            <a href="mailto:info@otaku-point.ch" class="link link-hover">
                info@otaku-point.ch
            </a>
            <span>Otaku-Point | 2022</span>
        </div>

        <div>
            <span class="footer-title">TEKO Olten</span>

            <a
                href="https://www.teko.ch"
                target="_blank"
                class="link link-hover"
            >
                www.teko.ch
            </a>
            <a href="mailto:olten@teko.ch" class="link link-hover">
                olten@teko.ch
            </a>
        </div>
    </footer>
</template>
