# WFA Validate Report

## Params

```json
{
  "strategy_id": "st_mr_1to5",
  "strategy_token": "st_mr_1to5",
  "start": "2021-03-04",
  "end": "2026-03-04",
  "period": "2y",
  "interval": "1d",
  "train_days": 180,
  "test_days": 30,
  "step_days": 90,
  "top_n": null,
  "initial_cash": 10000.0,
  "symbols_count": 243,
  "cost": {},
  "logic_params": {},
  "logic_params_hash": "44136fa355b3678a",
  "profile_name": "st_mr_1to5",
  "profile_path": null,
  "warmup_days": 120
}
```

## Windows

| i | train_range | train_trade_count | train_mdd | freeze_enabled | freeze_risk_scale | freeze_reasons | test_range | test_trade_count | test_return | test_mdd |
|---:|---|---:|---:|:---:|---:|---|---|---:|---:|---:|
| 1 | 2021-03-04~2021-08-31 | 16 | -0.0224 | True | 1.00 | TRADE_COUNT_OK | 2021-08-31~2021-09-30 | 7 | 0.0467 | -0.0177 |
| 2 | 2021-06-02~2021-11-29 | 70 | -0.1069 | True | 0.50 | TRADE_COUNT_OK,DRAWDOWN_HIGH | 2021-11-29~2021-12-29 | 1 | -0.0021 | -0.0021 |
| 3 | 2021-08-31~2022-02-27 | 70 | -0.1308 | True | 0.50 | TRADE_COUNT_OK,DRAWDOWN_HIGH | 2022-02-27~2022-03-29 | 0 | 0.0000 | 0.0000 |
| 4 | 2021-11-29~2022-05-28 | 61 | -0.0718 | True | 1.00 | TRADE_COUNT_OK | 2022-05-28~2022-06-27 | 1 | 0.0064 | -0.0085 |
| 5 | 2022-02-27~2022-08-26 | 45 | -0.0723 | True | 1.00 | TRADE_COUNT_OK | 2022-08-26~2022-09-25 | 6 | -0.0004 | -0.0135 |
| 6 | 2022-05-28~2022-11-24 | 50 | -0.0627 | True | 1.00 | TRADE_COUNT_OK | 2022-11-24~2022-12-24 | 2 | 0.0113 | 0.0000 |
| 7 | 2022-08-26~2023-02-22 | 73 | -0.0651 | True | 1.00 | TRADE_COUNT_OK | 2023-02-22~2023-03-24 | 1 | 0.0058 | 0.0000 |
| 8 | 2022-11-24~2023-05-23 | 53 | -0.0217 | True | 1.00 | TRADE_COUNT_OK | 2023-05-23~2023-06-22 | 1 | 0.0057 | 0.0000 |
| 9 | 2023-02-22~2023-08-21 | 42 | -0.1966 | True | 0.50 | TRADE_COUNT_OK,DRAWDOWN_HIGH | 2023-08-21~2023-09-20 | 2 | 0.0005 | -0.0040 |
| 10 | 2023-05-23~2023-11-19 | 49 | -0.1830 | True | 0.50 | TRADE_COUNT_OK,DRAWDOWN_HIGH | 2023-11-19~2023-12-19 | 0 | 0.0000 | 0.0000 |
| 11 | 2023-08-21~2024-02-17 | 36 | -0.0395 | True | 1.00 | TRADE_COUNT_OK | 2024-02-17~2024-03-18 | 0 | 0.0000 | 0.0000 |
| 12 | 2023-11-19~2024-05-17 | 67 | -0.0625 | True | 1.00 | TRADE_COUNT_OK | 2024-05-17~2024-06-16 | 2 | -0.0164 | -0.0164 |
| 13 | 2024-02-17~2024-08-15 | 59 | -0.0283 | True | 1.00 | TRADE_COUNT_OK | 2024-08-15~2024-09-14 | 3 | 0.0071 | -0.0010 |
| 14 | 2024-05-17~2024-11-13 | 41 | -0.0219 | True | 1.00 | TRADE_COUNT_OK | 2024-11-13~2024-12-13 | 7 | 0.0176 | -0.0105 |
| 15 | 2024-08-15~2025-02-11 | 40 | -0.0394 | True | 1.00 | TRADE_COUNT_OK | 2025-02-11~2025-03-13 | 1 | -0.0032 | -0.0032 |
| 16 | 2024-11-13~2025-05-12 | 52 | -0.0747 | True | 1.00 | TRADE_COUNT_OK | 2025-05-12~2025-06-11 | 0 | 0.0049 | 0.0000 |
| 17 | 2025-02-11~2025-08-10 | 46 | -0.0263 | True | 1.00 | TRADE_COUNT_OK | 2025-08-10~2025-09-09 | 1 | 0.0025 | -0.0001 |
| 18 | 2025-05-12~2025-11-08 | 66 | -0.0707 | True | 1.00 | TRADE_COUNT_OK | 2025-11-08~2025-12-08 | 2 | -0.0038 | -0.0057 |

## Overall Train Summary

```json
{
  "windows": 18,
  "trade_count_total": 936,
  "total_return_mean": -0.0188571046279497,
  "max_drawdown_mean": -0.07203365796196058,
  "sharpe_ratio_mean": -0.10107589473116316,
  "win_rate_mean": 0.46508264267417093
}
```

## Overall Test Summary

```json
{
  "windows": 18,
  "trade_count_total": 37,
  "total_return_mean": 0.004584399429505232,
  "max_drawdown_mean": -0.0045941012128702385,
  "sharpe_ratio_mean": 0.838812265411641,
  "win_rate_mean": 0.414021164021164
}
```

## Train → Freeze → Test Example

- Train: compute fixed-strategy metrics on train window
- Freeze: derive `enabled` + `risk_scale` from train metrics only
- Test: run fixed strategy with frozen config (risk scaled or disabled)
