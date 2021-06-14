window.BENCHMARK_DATA = {
  "lastUpdate": 1623637251542,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "0a9ea9bc73049f753aedf68dcbaa18982486c15f",
          "message": ":fire: Remove deprecated `.gitlab-ci.yml` from cookiecutter",
          "timestamp": "2021-06-14T00:56:05Z",
          "tree_id": "dbdc1965f544ed5e14c493855dffe4ffe7402a7d"
        },
        "date": 1623637092362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14384.062214772925,
            "unit": "iter/sec",
            "range": "stddev: 0.00003205853238823664",
            "extra": "mean: 69.52139006830531 usec\nrounds: 11821"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3845522.938184692,
            "unit": "iter/sec",
            "range": "stddev: 2.775445889189399e-7",
            "extra": "mean: 260.0426563758986 nsec\nrounds: 5848"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12131.102632894079,
            "unit": "iter/sec",
            "range": "stddev: 0.00009213513577353799",
            "extra": "mean: 82.43273758878695 usec\nrounds: 8681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 132606.21035618422,
            "unit": "iter/sec",
            "range": "stddev: 0.000022118719119095913",
            "extra": "mean: 7.54112493912593 usec\nrounds: 45046"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13631.777249696885,
            "unit": "iter/sec",
            "range": "stddev: 0.00010897046710461772",
            "extra": "mean: 73.35800619997924 usec\nrounds: 13387"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4197656.525337549,
            "unit": "iter/sec",
            "range": "stddev: 2.279419952742947e-7",
            "extra": "mean: 238.22816230051382 nsec\nrounds: 43669"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "1aec2bed29a5611319342e36c07e84fc2951d09b",
          "message": ":white_check_mark: Auto-update with `pyupgrade`",
          "timestamp": "2021-06-14T02:15:29Z",
          "tree_id": "2a071fb5350f1f34b0e45696453ce2a3cee698f8"
        },
        "date": 1623637250569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15660.249009877785,
            "unit": "iter/sec",
            "range": "stddev: 0.00003909915534163838",
            "extra": "mean: 63.85594503441451 usec\nrounds: 11862"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3991740.6433170093,
            "unit": "iter/sec",
            "range": "stddev: 1.1839063632867803e-7",
            "extra": "mean: 250.51727788832528 nsec\nrounds: 11441"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13264.0004824769,
            "unit": "iter/sec",
            "range": "stddev: 0.000013760927056444612",
            "extra": "mean: 75.39203585834471 usec\nrounds: 8673"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125283.70102834409,
            "unit": "iter/sec",
            "range": "stddev: 5.325981006442896e-7",
            "extra": "mean: 7.981884249841571 usec\nrounds: 41149"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15459.584036453729,
            "unit": "iter/sec",
            "range": "stddev: 0.00006547470926825924",
            "extra": "mean: 64.6847934357094 usec\nrounds: 13071"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4026414.5475051235,
            "unit": "iter/sec",
            "range": "stddev: 7.772898858603507e-8",
            "extra": "mean: 248.35992126562223 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}