<template>
    <div class="container-home">
        <header>
            <h1>
                Le/Tip
            </h1>
        </header>

        <main class="container-conteudo">
            <converter
                @dataResults="getResult"
                @loaderConvert="loading"
                class="form-enter"
                :style="showForm"
                :resetCalc="reset"
            />
            <result
                :result="result"
                class="result"
                :style="showResult"
            />
        </main>

        <button-float
            :icon="icon"
            :disabledButton="sizeResult > 0 ? false : true"
            @change="changePage"
            class="button"
        />

        <loader v-show="loader"/>
    </div>
</template>

<script>
import Converter from "../components/Forms/Converter.vue";
import Result from "../components/Forms/Result.vue";
import ButtonFloat from "../components/shared/ButtonFloat";
import Loader from "../components/shared/Loader";

export default {
  name: "Home",
  components: {
    Converter,
    Result,
    ButtonFloat,
    Loader
  },
  data() {
    return {
      result: {},
      next: false,
      icon: "next.svg",
      sizeResult: 0,
      loader: false,
      reset: false
    };
  },
  methods: {
    getResult(result) {
      this.result = result;
      this.sizeResult = Object.keys(this.result).length;
    },
    changePage() {
      this.next = !this.next;

      if (this.next) {
        this.icon = "previous.svg";
      } else {
        this.icon = "next.svg";
        this.reset = true;
        this.sizeResult = 0;
        this.result = {};
      }
    },
    loading(loader) {
      this.loader = loader;
    }
  },
  computed: {
    showResult() {
        return {
            '--show-result': this.next ? 'visible' : 'hidden',
            '--show-display': this.next ? 'inherit' : 'none'
        }
    },    
    showForm() {
        return {
            '--show-form': !this.next ? 'visible' : 'hidden',
            '--show-display-form': !this.next ? 'inherit' : 'none'
        }
    }
  }
};
</script>

<style>
.container-home {
  height: calc(100vh - 30px);
}

.container-home > header {
  padding: 15px;
  text-align: center;
  margin: 30px 0px 30px 0px;
}

.container-home > .container-conteudo {
  width: 100vw;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .container-conteudo > .result {
    visibility: var(--show-result);
    display: var(--show-display);
  }

  .container-conteudo > .form-enter {
    visibility: var(--show-form);
    display: var(--show-display-form);
  }

  .container-home > .button {
    visibility: visible;
    display: flex;
  }
}

@media (min-width: 601px) {
  .container-home > .button {
    visibility: hidden;
    display: none;
  }
}
</style>