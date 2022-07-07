<script setup>
import { ref } from "vue";
import { useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    email: null,
});

const isCompleted = ref(false);

function submit() {
    form.post(route("members.store"), {
        onSuccess: () => {
            isCompleted.value = true;
        },
    });
}
</script>
<template>
    <div class="card shadow-xl w-full md:w-auto bg-base-200">
        <div class="card-body">
            <h3 class="text-center text-lg font-bold">
                Werde Otaku-Mitglied und erhalte die neusten Infos per Mail!
            </h3>

            <form v-if="!isCompleted" @submit.prevent="submit">
                <div class="flex flex-row justify-center gap-4">
                    <div class="form-control w-full max-w-xs">
                        <input
                            required
                            v-model="form.email"
                            type="email"
                            placeholder="naruto.uzumaki@konoha.com"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <label class="label">
                            <span
                                v-if="form.errors.email"
                                class="label-text-alt text-error"
                            >
                                {{ form.errors.email }}
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="btn btn-primary"
                        :class="[form.processing ? 'loading' : '']"
                    >
                        Senden
                    </button>
                </div>
            </form>

            <div v-else class="flex justify-center">
                <div class="alert alert-success shadow-lg max-w-md">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span
                            >Du hast dich erfolgreich eingetragen! 🤩🍥 <br />
                            Wir senden dir eine Email 📧 (Check auch deinen
                            Junk-Ordner)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
