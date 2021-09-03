window.BENCHMARK_DATA = {
  "lastUpdate": 1630689378834,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "e9c44c1481352663c9fbc7352aa791b22bdd0659",
          "message": ":art: Auto-format with Black",
          "timestamp": "2021-09-03T17:09:04Z",
          "tree_id": "93ec39a966b099b3bc6af8d73d912a93190ec1b6"
        },
        "date": 1630689377058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16493.90431572514,
            "unit": "iter/sec",
            "range": "stddev: 0.000008210468410884224",
            "extra": "mean: 60.62845890567032 usec\nrounds: 6984"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5012660.888816535,
            "unit": "iter/sec",
            "range": "stddev: 2.068268784533366e-8",
            "extra": "mean: 199.49484359315394 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14473.71944781891,
            "unit": "iter/sec",
            "range": "stddev: 0.000003053102079977288",
            "extra": "mean: 69.0907408842095 usec\nrounds: 8749"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150760.05763424555,
            "unit": "iter/sec",
            "range": "stddev: 7.217105690722201e-7",
            "extra": "mean: 6.6330566311275225 usec\nrounds: 33003"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16485.88259874129,
            "unit": "iter/sec",
            "range": "stddev: 0.000005655984046465774",
            "extra": "mean: 60.657959560888216 usec\nrounds: 13477"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4889153.62368377,
            "unit": "iter/sec",
            "range": "stddev: 2.0594544645870838e-8",
            "extra": "mean: 204.5343789475561 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}