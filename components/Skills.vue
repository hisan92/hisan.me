<template lang="pug">
  #skills.skills
    .title {{ $t('labels.anchors.skills') }}
    .row.sm_cols-1.md_cols-2.gap-6.mb-3
      .column
        p.legend
          | {{ $t('pages.skills.technical') }}
        .row.cols-6
          a(href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank")
            JavaScriptLogo(width="48")
          a(href="https://www.typescriptlang.org/" target="_blank")
            TypeScriptLogo(width="48")
          a(href="https://www.php.net/" target="_blank")
            PHPLogo(width="48")
          a(href="https://docs.oracle.com/en/java/index.html" target="_blank")
            JavaLogo(width="48")
          a(href="https://docs.microsoft.com/dotnet/csharp/" target="_blank")
            CSharpLogo(width="48")
          a(href="https://python.org/" target="_blank")
            PythonLogo(width="48")

      .column
        p.legend
          | {{ $t('pages.skills.designPatterns') }}
        p
          | Factory, Adapter, Composite, Singleton, Facade, Observer, Proxy

    .row.sm_cols-1.md_cols-2.gap-6
      .column
        p.legend
          | {{ $t('pages.skills.technologies') }}
        .row.cols-6
          a(href="https://git-scm.com/" target="_blank")
            GitLogo(width="48")
          a(href="https://www.docker.com/" target="_blank")
            DockerLogo(width="48")
          a(href="https://laravel.com/" target="_blank")
            LaravelLogo(width="48")
          a(href="https://vuejs.org/" target="_blank")
            VueJSLogo(width="48")
          a(href="https://nuxtjs.org/" target="_blank")
            NuxtJSLogo(width="48")
          a(href="https://graphql.org/" target="_blank")
            GraphQLLogo(width="48")

      .column
        p.legend
          | {{ $t('pages.skills.agile') }}
        p
          | Scrum, Kanban
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import JavaScriptLogo from '~/components/Shared/Logo/JavaScriptLogo.vue'
import TypeScriptLogo from '~/components/Shared/Logo/TypeScriptLogo.vue'
import PHPLogo from '~/components/Shared/Logo/PHPLogo.vue'
import JavaLogo from '~/components/Shared/Logo/JavaLogo.vue'
import CSharpLogo from '~/components/Shared/Logo/CSharpLogo.vue'
import PythonLogo from '~/components/Shared/Logo/PythonLogo.vue'
import GitLogo from '~/components/Shared/Logo/GitLogo.vue'
import DockerLogo from '~/components/Shared/Logo/DockerLogo.vue'
import LaravelLogo from '~/components/Shared/Logo/LaravelLogo.vue'
import VueJSLogo from '~/components/Shared/Logo/VueJSLogo.vue'
import NuxtJSLogo from '~/components/Shared/Logo/NuxtJSLogo.vue'
import GraphQLLogo from '~/components/Shared/Logo/GraphQLLogo.vue'

export default defineComponent({
  name: 'SkillComponent',
  components: {
    JavaScriptLogo,
    TypeScriptLogo,
    PHPLogo,
    JavaLogo,
    CSharpLogo,
    PythonLogo,
    GitLogo,
    DockerLogo,
    LaravelLogo,
    VueJSLogo,
    NuxtJSLogo,
    GraphQLLogo,
  },
})
</script>

<style lang="sass">
.skills
  .legend
    @apply mb-4 border-l-4 pl-4
</style>
