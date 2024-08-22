module.exports = {
  documentation: [
    "index",
    {
      type: "category",
      label: "Evaluate",
      collapsed: false,
      link: {
        type: "doc",
        id: "evaluate/index",
      },
      items: [
        "evaluate/why-temporal",
        "evaluate/how-it-works",
        "evaluate/major-components",
        {
          type: "category",
          label: "Features",
          collapsed: true,
          link: {
            type: "doc",
            id: "evaluate/development-production-features/index",
          },
          items: [
            "evaluate/development-production-features/core-application",
            "evaluate/development-production-features/temporal-client",
            "evaluate/development-production-features/failure-detection",
            "evaluate/development-production-features/throughput-composability",
            "evaluate/development-production-features/workflow-message-passing",
            "evaluate/development-production-features/debugging",
            "evaluate/development-production-features/interrupt-workflow",
            {
              type: "category",
              label: "High Availability",
              collapsed: true,
              link: {
                type: "doc",
                id: "evaluate/development-production-features/high-availability",
              },
              items: [
                "evaluate/development-production-features/multi-region-namespace",
              ],
            },
            "evaluate/development-production-features/testing-suite",
            "evaluate/development-production-features/observability",
            "evaluate/development-production-features/data-encryption",
            "evaluate/development-production-features/schedules",
            "evaluate/development-production-features/cloud-automation",
            "evaluate/development-production-features/low-latency",
            "evaluate/development-production-features/multi-tenancy",
            {
              type: "category",
              label: "Product release stages",
              collapsed: true,
              link: {
                type: "doc",
                id: "evaluate/development-production-features/release-stages",
              },
              items: [
                {
                  type: "link",
                  label: "Change-log",
                  href: "https://temporal.io/change-log",
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Temporal Cloud",
          collapsed: true,
          link: {
            type: "doc",
            id: "evaluate/temporal-cloud/index",
          },
          items: [
            "evaluate/temporal-cloud/overview",
            "evaluate/temporal-cloud/security",
            "evaluate/temporal-cloud/service-availability",
            "evaluate/temporal-cloud/limits",
            "evaluate/temporal-cloud/sla",
            "evaluate/temporal-cloud/pricing",
            "evaluate/temporal-cloud/support",
          ],
        },
        "security",
      ],
    },
    {
      type: "link",
      label: "Get started",
      href: "https://learn.temporal.io/getting_started/",
    },
    {
      type: "category",
      label: "Develop",
      collapsed: false,
      link: {
        type: "doc",
        id: "develop/index",
      },
      items: [
        {
          type: "category",
          label: "Go SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/go/index",
          },
          items: [
            "develop/go/core-application",
            "develop/go/temporal-clients",
            "develop/go/namespaces",
            "develop/go/testing-suite",
            "develop/go/failure-detection",
            "develop/go/message-passing",
            "develop/go/cancellation",
            "develop/go/asynchronous-activity-completion",
            "develop/go/versioning",
            "develop/go/observability",
            "develop/go/debugging",
            "develop/go/schedules",
            "develop/go/data-encryption",
            "develop/go/side-effects",
            "develop/go/child-workflows",
            "develop/go/continue-as-new",
            "develop/go/selectors",
            "develop/go/sessions",
            "develop/go/timers",
          ],
        },
        {
          type: "category",
          label: "Java SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/java/index",
          },
          items: [
            "develop/java/core-application",
            "develop/java/temporal-clients",
            "develop/java/namespaces",
            "develop/java/testing-suite",
            "develop/java/failure-detection",
            "develop/java/message-passing",
            "develop/java/asynchronous-activity-completion",
            "develop/java/versioning",
            "develop/java/observability",
            "develop/java/debugging",
            "develop/java/schedules",
            "develop/java/data-encryption",
            "develop/java/side-effects",
            "develop/java/child-workflows",
            "develop/java/continue-as-new",
            "develop/java/timers",
          ],
        },
        {
          type: "category",
          label: "PHP SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/php/index",
          },
          items: [
            "develop/php/core-application",
            "develop/php/temporal-clients",
            "develop/php/testing-suite",
            "develop/php/failure-detection",
            "develop/php/message-passing",
            "develop/php/continue-as-new",
            "develop/php/cancellation",
            "develop/php/asynchronous-activity-completion",
            "develop/php/observability",
            "develop/php/debugging",
            "develop/php/schedules",
            "develop/php/side-effects",
            "develop/php/child-workflows",
            "develop/php/timers",
          ],
        },
        {
          type: "category",
          label: "Python SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/python/index",
          },
          items: [
            "develop/python/core-application",
            "develop/python/temporal-clients",
            "develop/python/testing-suite",
            "develop/python/failure-detection",
            "develop/python/message-passing",
            "develop/python/cancellation",
            "develop/python/asynchronous-activity-completion",
            "develop/python/versioning",
            "develop/python/observability",
            "develop/python/debugging",
            "develop/python/schedules",
            "develop/python/data-encryption",
            "develop/python/child-workflows",
            "develop/python/continue-as-new",
            "develop/python/timers",
            "develop/python/interrupt-a-workflow-execution",
          ],
        },
        {
          type: "category",
          label: "TypeScript SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/typescript/index",
          },
          items: [
            "develop/typescript/core-application",
            "develop/typescript/temporal-clients",
            "develop/typescript/namespaces",
            "develop/typescript/testing-suite",
            "develop/typescript/failure-detection",
            "develop/typescript/cancellation",
            "develop/typescript/message-passing",
            "develop/typescript/asynchronous-activity-completion",
            "develop/typescript/versioning",
            "develop/typescript/observability",
            "develop/typescript/debugging",
            "develop/typescript/schedules",
            "develop/typescript/data-encryption",
            "develop/typescript/child-workflows",
            "develop/typescript/continue-as-new",
            "develop/typescript/interceptors",
            "develop/typescript/timers",
          ],
        },
        {
          type: "category",
          label: ".NET SDK",
          collapsed: true,
          link: {
            type: "doc",
            id: "develop/dotnet/index",
          },
          items: [
            "develop/dotnet/core-application",
            "develop/dotnet/temporal-client",
            "develop/dotnet/testing-suite",
            "develop/dotnet/failure-detection",
            "develop/dotnet/message-passing",
            "develop/dotnet/cancellation",
            "develop/dotnet/versioning",
            "develop/dotnet/observability",
            "develop/dotnet/debugging",
            "develop/dotnet/schedules",
            "develop/dotnet/data-encryption",
            "develop/dotnet/durable-timers",
            "develop/dotnet/continue-as-new",
            "develop/dotnet/child-workflows",
            "develop/dotnet/asynchronous-activity",
          ],
        },
        "develop/activity-retry-simulator",
        "develop/worker-performance",
      ],
    },
    {
      type: "category",
      label: "Deploy to production",
      collapsed: false,
      link: {
        type: "doc",
        id: "production-deployment/index",
      },
      items: [
        {
          type: "category",
          label: "Temporal Cloud",
          collapsed: true,
          link: {
            type: "doc",
            id: "production-deployment/cloud/index",
          },
          items: [
            "production-deployment/cloud/get-started",
            {
              type: "category",
              label: "Account setup",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/account-setup/index",
              },
              items: [
                "production-deployment/cloud/account-setup/certificates",
                "production-deployment/cloud/account-setup/namespaces",
                "production-deployment/cloud/account-setup/users",
              ],
            },
            "production-deployment/cloud/service-accounts",
            "production-deployment/cloud/api-keys",
            {
              type: "category",
              label: "Metrics",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/metrics/index",
              },
              items: [
                "production-deployment/cloud/metrics/general-setup",
                "production-deployment/cloud/metrics/reference",
                "production-deployment/cloud/metrics/datadog",
                "production-deployment/cloud/metrics/prometheus-grafana",
              ],
            },
            "production-deployment/cloud/multi-region",
            "production-deployment/cloud/worker-health",
            "production-deployment/cloud/service-health",
            "production-deployment/cloud/saml",
            "production-deployment/cloud/operation-api",
            "production-deployment/cloud/terraform-provider",
            "production-deployment/cloud/audit-logging",
            "production-deployment/cloud/export",
            {
              type: "category",
              label: "CLI (tcld)",
              collapsed: true,
              link: {
                type: "doc",
                id: "production-deployment/cloud/tcld/index",
              },
              items: [
                "production-deployment/cloud/tcld/account",
                "production-deployment/cloud/tcld/apikey",
                "production-deployment/cloud/tcld/feature",
                "production-deployment/cloud/tcld/generate-certificates",
                "production-deployment/cloud/tcld/login",
                "production-deployment/cloud/tcld/logout",
                "production-deployment/cloud/tcld/namespace",
                "production-deployment/cloud/tcld/request",
                "production-deployment/cloud/tcld/user",
                "production-deployment/cloud/tcld/version",
              ],
            },
          ],
        },
        "production-deployment/data-encryption",
        "production-deployment/migration",
        {
          type: "category",
          label: "Self-host",
          collapsed: true,
          link: {
            type: "doc",
            id: "production-deployment/self-hosted-guide/index",
          },
          items: [
            "production-deployment/self-hosted-guide/deployment",
            "production-deployment/self-hosted-guide/checklist",
            "production-deployment/self-hosted-guide/defaults",
            "production-deployment/self-hosted-guide/security",
            "production-deployment/self-hosted-guide/monitoring",
            "production-deployment/self-hosted-guide/visibility",
            "production-deployment/self-hosted-guide/upgrade-server",
            "production-deployment/self-hosted-guide/archival",
            "production-deployment/self-hosted-guide/multi-cluster-replication",
            "production-deployment/self-hosted-guide/server-frontend-api-reference",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "CLI (temporal)",
      collapsed: true,
      link: {
        type: "doc",
            id: "cli/index",
          },
          items: [
            "cli/activity",
            "cli/batch",
            "cli/cmd-options",
            "cli/env",
            "cli/operator",
            "cli/schedule",
            "cli/server",
            "cli/task-queue",
            "cli/workflow",
          ],
        },
        {
          type: "category",
          label: "References",
          collapsed: true,
          link: {
            type: "doc",
            id: "references/index",
          },
          items: [
            "references/cluster-metrics",
            "references/commands",
            "references/configuration",
            "references/dynamic-configuration",
            "references/errors",
            "references/events",
            "references/failures",
            "references/sdk-metrics",
            "references/server-options",
            "references/web-ui-configuration",
            "references/web-ui-environment-variables",
            "references/web-ui-server-env-vars",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          collapsed: true,
          link: {
            type: "doc",
            id: "troubleshooting/index",
          },
          items: [
            "troubleshooting/blob-size-limit-error",
            "troubleshooting/deadline-exceeded-error",
            "troubleshooting/last-connection-error",
          ],
        },
        {
          type: "category",
          label: "Encyclopedia",
          collapsed: true,
          link: {
            type: "doc",
            id: "encyclopedia/index",
          },
          items: [
            "encyclopedia/temporal",
            {
              type: "category",
              label: "Temporal SDKs",
              collapsed: true,
              link: {
                type: "doc",
                id: "encyclopedia/temporal-sdks",
              },
              items: [
                "encyclopedia/go-sdk-multithreading",
                "encyclopedia/python-sdk-sandbox",
                "encyclopedia/python-sdk-sync-vs-async",
              ],
            },
            "encyclopedia/workflows",
            "encyclopedia/activities",
            {
              type: "category",
              label: "Detecting application failures",
              collapsed: true,
              link: {
                type: "doc",
                id: "encyclopedia/detecting-application-failures",
              },
              items: [
                "encyclopedia/detecting-activity-failures",
                "encyclopedia/detecting-workflow-failures",
                "encyclopedia/retry-policies",
              ],
            },
            "encyclopedia/workers",
            "encyclopedia/workflow-message-passing",
            "encyclopedia/child-workflows",
            "encyclopedia/visibility",
            "encyclopedia/clusters",
            "encyclopedia/namespaces",
            "encyclopedia/dataconversion",
          ],
        },
        "glossary",
        // {
        //   type: "autogenerated",
        //   dirName: "./dev-guide", // '.' means the current docs folder
        // },
      ],
      tctl: [
        "tctl-v1/index",
        "tctl-v1/activity",
        "tctl-v1/admin",
        "tctl-v1/batch",
        "tctl-v1/cluster",
        "tctl-v1/dataconverter",
        "tctl-v1/namespace",
        "tctl-v1/schedule",
        "tctl-v1/taskqueue",
        "tctl-v1/workflow",
      ],
    };
