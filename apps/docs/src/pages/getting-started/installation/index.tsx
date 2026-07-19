import { Alert, Text } from "@hope-ui/solid";
import Prism from "prismjs";
import { onMount } from "solid-js";

import Code from "@/components/Code";
import CodeSnippet from "@/components/CodeSnippet";
import { ContextualNavLink } from "@/components/ContextualNav";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";

import { snippets } from "./snippets";

export default function Installation() {
  const nextLink: ContextualNavLink = {
    href: "/docs/changelog",
    label: "Changelog",
  };

  const contextualNavLinks: ContextualNavLink[] = [
    { href: "#installation", label: "Installation" },
    { href: "#provider-setup", label: "Provider setup" },
    { href: "#optional-setup", label: "Optional setup" },
  ];

  onMount(() => {
    Prism.highlightAll();
  });

  return (
    <PageLayout nextLink={nextLink} contextualNavLinks={contextualNavLinks}>
      <PageTitle>Getting Started</PageTitle>
      <Alert status="warning" mb="$4">
        <strong>Warning:</strong>&nbsp;Hope UI v0.x is not compatible with Solid Start and doesn't
        support SSR.
      </Alert>
      <SectionTitle id="installation">Installation</SectionTitle>
      <Text mb="$5">
        Inside your SolidJS project, install Hope UI by running either of the following:
      </Text>
      <CodeSnippet lang="bash" snippet={snippets.npmInstall} mb="$3" />
      <CodeSnippet lang="bash" snippet={snippets.yarnAdd} mb="$3" />
      <CodeSnippet lang="bash" snippet={snippets.pnpmAdd} mb="$12" />
      <SectionTitle id="provider-setup">Provider setup</SectionTitle>
      <Text mb="$5">
        After installing Hope UI, you need to set up the <Code>HopeProvider</Code> at the root of
        your application. This can be either in your <Code>index.jsx</Code> or{" "}
        <Code>index.tsx</Code>
      </Text>
      <Text mb="$5">Put in the following code:</Text>
      <CodeSnippet snippet={snippets.providerSetup} mb="$12" />
      <SectionTitle id="optional-setup">Optional setup</SectionTitle>
      <Text mb="$3">
        If you intend to customise the default theme to match your design requirements, you can
        extend the <Code>theme</Code> from <Code>@hope-ui/solid</Code>.
      </Text>
      <Text mb="$5">
        The HopeProvider accept a <Code>config</Code> prop that deep merges the default theme with
        your customizations.
      </Text>
      <CodeSnippet snippet={snippets.customizeTheme} />
    </PageLayout>
  );
}
