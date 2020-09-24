<template lang="pug">
  BaseBox.tw-flex
    .tw-flex-1
      p.tw-text-md.tw-mb-4.tw-border-l-4.tw-pl-4
        | {{ $t('pages.skills.technical') }}
      .tw-flex.tw-items-center.tw-mb-8
        b-tooltip(label="JavaScript" type="is-black")
          a(href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank")
            JavaScriptLogo(width="48").tw-mr-2
        b-tooltip(label="TypeScript" type="is-black")
          a(href="https://www.typescriptlang.org/" target="_blank")
            TypeScriptLogo(width="48").tw-mr-2
        a(href="https://www.php.net/" target="_blank")
          PHPLogo(width="48").tw-mr-2
        b-tooltip(label="Java" type="is-black")
          a(href="https://docs.oracle.com/en/java/index.html" target="_blank")
            JavaLogo(width="48").tw-mr-2
        a(href="https://docs.microsoft.com/dotnet/csharp/" target="_blank")
          CSharpLogo(width="48").tw-mr-2
        b-tooltip(label="Python" type="is-black")
          a(href="https://python.org/" target="_blank")
            PythonLogo(width="48").tw-mr-2
      p.tw-text-md.tw-mb-4.tw-border-l-4.tw-pl-4
        | {{ $t('pages.skills.technologies') }}
      .tw-flex.tw-items-center
        b-tooltip(label="Git" type="is-black")
          a(href="https://git-scm.com/" target="_blank")
            GitLogo(width="48").tw-mr-2
        b-tooltip(label="Docker" type="is-black")
          a(href="https://www.docker.com/" target="_blank")
            DockerLogo(width="48").tw-mr-2
        b-tooltip(label="Laravel" type="is-black")
          a(href="https://laravel.com/" target="_blank")
            LaravelLogo(width="48").tw-mr-2
        b-tooltip(label="VueJS" type="is-black")
          a(href="https://vuejs.org/" target="_blank")
            VueJSLogo(width="48").tw-mr-2
        b-tooltip(label="NuxtJS" type="is-black")
          a(href="https://nuxtjs.org/" target="_blank")
            NuxtJSLogo(width="48").tw-mr-2
        b-tooltip(label="GraphQL" type="is-black")
          a(href="https://graphql.org/" target="_blank")
            GraphQLLogo(width="48").tw-mr-2
    .tw-flex-1
      p.tw-text-md.tw-mb-4.tw-border-l-4.tw-pl-4
        | {{ $t('pages.skills.designPatterns') }}
      p.tw-mb-8
        | Factory, Adapter, Composite, Singleton, Facade, Observer, Proxy
      p.tw-text-md.tw-mb-4.tw-border-l-4.tw-pl-4
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

/* const frameworks = [
  { label: 'Git', href: 'https://git-scm.com/', Component: GitLogo },
  { label: 'Docker', href: 'https://www.docker.com/', Component: DockerLogo },
  { label: 'Laravel', href: 'https://laravel.com/', Component: LaravelLogo },
  { label: 'VueJS', href: 'https://vuejs.org/', Component: VueJSLogo },
  { label: 'NuxtJS', href: 'https://nuxtjs.org/', Component: NuxtJSLogo },
  { label: 'GraphQL', href: 'https://graphql.org/', Component: GraphQLLogo },
] */

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
