---
id: how-to-monitor-temporal-cloud-metrics
title: How to monitor Temporal Cloud metrics
sidebar_label: Cloud metrics
description: Configure and track performance metrics for Temporal Cloud.
tags:
  - how-to
---

Beyond the [metrics](/references/sdk-metrics) provided by the Temporal SDKs, some key metrics exist only in Temporal Cloud.
You can use your own observability tool to query an endpoint and review Namespace metrics.

To ensure security of your metrics, a CA certificate dedicated to observability is required.
Only clients that use certificates signed by that CA, or that chain up to the CA, can query the metrics endpoint.
For more information about CA certificates in Temporal Cloud, see [Certificate requirements](https://docs.temporal.io/cloud/how-to-manage-certificates-in-temporal-cloud#certificate-requirements).

<!--- How to configure a metrics endpoint in Temporal Cloud using Temporal Cloud UI --->

## Configure a metrics endpoint using Temporal Cloud UI

:::note

To view and manage third-party integration settings, your user account must have the Global Admin [Role](https://docs.temporal.io/cloud/#account-level-roles).

:::

To assign a certificate and generate your metrics endpoint, follow these steps:

1. In Temporal Cloud UI, click **Settings**.
1. On the **Settings** page, click **Integrations**.
1. In the **Observability** card, click **Configure Observability**.
   (If observability is already configured, the **Edit** link appears instead.)
1. In **Certificates**, paste a base64-encoded CA certificate PEM block.
1. Click **Generate endpoint**.

After the page refreshes, the new metrics endpoint appears below **Endpoint**, in the form `https://<account-id>.tmprl.cloud/prometheus`.
Use the endpoint to configure your observability tool—for example, [Grafana](https://grafana.com/) with [this dashboard](https://github.com/temporalio/dashboards/blob/master/cloud/temporal_cloud.json).
For more information, see [Set up Grafana with Temporal Cloud](/kb/prometheus-grafana-setup-cloud).

You can also query via the [Prometheus HTTP API](https://prometheus.io/docs/prometheus/latest/querying/api/) at URLs like:

```
https://<account-id>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_state_transition_count
```

For example:

```
$ curl --cert client.pem --key client-key.pem "https://<account-id>.tmprl.cloud/prometheus/api/v1/query?query=temporal_cloud_v0_state_transition_count" | jq .
{
  "status": "success",
  "data": {
    "resultType": "vector",
    "result": [
      {
        "metric": {
          "__name__": "temporal_cloud_v0_state_transition_count",
          "__rollup__": "true",
          "operation": "WorkflowContext",
          "temporal_account": "a2dd6",
          "temporal_namespace": "mynamespace.a2dd6",
          "temporal_service_type": "history"
        },
        "value": [
          1672347471.2,
          "0"
        ]
      },
      ...
}
```

<!--- How to configure a metrics endpoint in Temporal Cloud using tcld --->

## Configure a metrics endpoint using tcld

To add a certificate to a metrics endpoint, use [`tcld account metrics accepted-client-ca add`](/cloud/tcld/account/metrics/accepted-client-ca/add).

To enable a metrics endpoint, use [`tcld account metrics enable`](/cloud/tcld/account/metrics/enable).

To disable a metrics endpoint, use [`tcld account metrics disable`](/cloud/tcld/account/metrics/disable).

## Available performance metrics

Temporal tracks the following metrics for your various Namespaces.

- temporal_cloud_v0_frontend_service_error_count - gRPC errors returned aggregated by operation
- temporal_cloud_v0_frontend_service_request_count - gRPC requests received aggregated by operation
- temporal_cloud_v0_poll_success_count - Tasks that are successfully matched to a poller
- temporal_cloud_v0_poll_success_sync_count - Tasks that are successfully sync matched to a poller
- temporal_cloud_v0_poll_timeout_count - When no tasks are available for a poller before timing out
- temporal_cloud_v0_schedule_action_success_count - Successful execution of a Scheduled Workflow
- temporal_cloud_v0_schedule_buffer_overruns_count - When average schedule run length is greater than average schedule interval while a `buffer_all` overlap policy is configured
- temporal_cloud_v0_schedule_missed_catchup_window_count - Skipped Scheduled executions when Workflows were delayed longer than the catchup window
- temporal_cloud_v0_schedule_rate_limited_count - Workflows that were delayed due to exceeding a rate limit
- temporal_cloud_v0_service_latency_bucket - Latency for `SignalWithStartWorkflowExecution`, `SignalWorkflowExecution`, `StartWorkflowExecution` operations
- temporal_cloud_v0_service_latency_count - Count of latency observations for `SignalWithStartWorkflowExecution`, `SignalWorkflowExecution`, `StartWorkflowExecution` operations
- temporal_cloud_v0_service_latency_sum - Sum of latency observation time for `SignalWithStartWorkflowExecution`, `SignalWorkflowExecution`, `StartWorkflowExecution` operations
- temporal_cloud_v0_state_transition_count - Count of state transitions for each namespace
- temporal_cloud_v0_total_action_count - Approximate count of Temporal Cloud actions
- temporal_cloud_v0_workflow_cancel_count - Workflows canceled before completing execution
- temporal_cloud_v0_workflow_continued_as_new_count - Workflow executions that were continued as new from a past execution
- temporal_cloud_v0_workflow_failed_count - Workflows that failed before completion
- temporal_cloud_v0_workflow_success_count - Workflows that successfully completed
- temporal_cloud_v0_workflow_terminate_count - Workflows terminated before completing execution
- temporal_cloud_v0_workflow_timeout_count - Workflows that timed out before completing execution

Metrics for all Namespaces in your account are available from the metrics endpoint.
The `temporal_namespace` label identifies the Namespace that is associated with each metric so that each user can build their own dashboard to meet their needs.

Metrics lag real-time performance by approximately one minute.

We retain raw metrics for seven days.

## How to use Temporal Cloud performance metrics

Most Temporal Cloud metrics are suffixed with `_count`. This indicates that they behave largely like a [Prometheus counter](https://prometheus.io/docs/concepts/metric_types/#counter). You'll want to use a function like `rate` or `increase` to calculate a per-second rate of increase, or an extrapolated total increase over a time period.

```
rate(temporal_cloud_v0_frontend_service_request_count[5m])
```

`temporal_cloud_v0_service_latency` has `_bucket`, `_count`, and `_sum` metrics. This is because it's a [Prometheus Histogram](https://prometheus.io/docs/concepts/metric_types/#histogram). You can use the `_count` and `_sum` metrics to calculate an average latency over a time period, or use the `_bucket` metric to calculate an approximate histogram quartile.

```
# the average latency observation over the last 5 minutes
rate(temporal_cloud_v0_service_latency_sum[5m]) / rate(temporal_cloud_v0_service_latency_count[5m])

# the approximate 99th percentile latency over the last 5 minutes, broken down by operation
histogram_quantile(0.99, sum(rate(temporal_cloud_v0_service_latency_bucket[5m])) by (le, operation))
```
