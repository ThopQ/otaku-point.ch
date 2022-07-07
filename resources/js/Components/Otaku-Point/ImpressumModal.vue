<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { XIcon } from "@heroicons/vue/outline";

const modal = ref(null);

onClickOutside(modal, () => {
    Inertia.get(
        route("welcome"),
        {},
        { preserveState: true, preserveScroll: true }
    );
});
</script>

<template>
    <div
        class="fixed top-0 h-screen w-full z-50 bg-base-100 backdrop-filter backdrop-blur-md bg-opacity-30 flex flex-col sm:grid sm:place-content-center pt-12 sm:pt-0"
    >
        <div ref="modal" class="card shadow-xl bg-base-300 max-w-md">
            <div class="card-body">
                <div class="flex flex-row justify-between">
                    <h1 class="card-title">Impressum</h1>

                    <Link
                        :href="route('welcome')"
                        class="btn btn-ghost"
                        preserve-state
                        preserve-scroll
                    >
                        <XIcon class="h-6 w-6 stroke-current"></XIcon>
                    </Link>
                </div>

                <div
                    class="max-h-96 overflow-y-auto overscroll-contain no-scrollbar"
                >
                    <p class="mb-5">
                        <span class="text-lg font-bold"> Kontakt</span><br />
                        <span>Otaku-Point</span><br />
                        <a
                            href="mailto:info@otaku-point.ch"
                            class="link link-hover"
                        >
                            info@otaku-point.ch
                        </a>
                        <br />
                        <span>Kevin Kölliker</span><br />
                        <span>Thomas Iseli</span>
                    </p>

                    <p class="mb-5">
                        <span class="text-lg font-bold">
                            Technischer Kontakt
                        </span>
                        <br />
                        <span>Thomas Iseli</span><br />
                        <a
                            href="https://webyourself.ch"
                            class="link link-hover"
                            target="_blank"
                            >www.webyourself.ch
                        </a>
                    </p>

                    <p class="mb-5">
                        Haftungsausschluss Der Autor übernimmt keinerlei Gewähr
                        hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
                        Aktualität, Zuverlässigkeit und Vollständigkeit der
                        Informationen. Haftungsansprüche gegen den Autor wegen
                        Schäden materieller oder immaterieller Art, welche aus
                        dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                        veröffentlichten Informationen, durch Missbrauch der
                        Verbindung oder durch technische Störungen entstanden
                        sind, werden ausgeschlossen. Alle Angebote sind
                        unverbindlich. Der Autor behält es sich ausdrücklich
                        vor, Teile der Seiten oder das gesamte Angebot ohne
                        gesonderte Ankündigung zu verändern, zu ergänzen, zu
                        löschen oder die Veröffentlichung zeitweise oder
                        endgültig einzustellen.
                    </p>

                    <p class="mb-5">
                        Haftung für Links Verweise und Links auf Webseiten
                        Dritter liegen ausserhalb unseres Verantwortungsbereichs
                        Es wird jegliche Verantwortung für solche Webseiten
                        abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                        erfolgen auf eigene Gefahr des Nutzers oder der
                        Nutzerin.
                    </p>

                    <p class="mb-5">
                        Wir erheben keine personenbezogenen Daten, ausser nicht
                        kateregorisierbaren Email-Adressen. Diese werden
                        lediglich dazu verwendet, den registrierten
                        Otaku-Mitgliedern eine Email mit einem Umfrageformular
                        zukommen zu lassen.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}

.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
