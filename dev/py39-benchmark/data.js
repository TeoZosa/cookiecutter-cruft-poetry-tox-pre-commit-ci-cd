window.BENCHMARK_DATA = {
  "lastUpdate": 1631121682608,
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
          "id": "c7e30fc0e705d46699c86043533715c34a3b2fbd",
          "message": ":cookie: :memo: Remove redundant qualifiers for CI/CD tools",
          "timestamp": "2021-09-08T17:10:44Z",
          "tree_id": "6c0dd1dae3ec9811d681e8a04f23929d214dbd93"
        },
        "date": 1631121680399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14416.02851384431,
            "unit": "iter/sec",
            "range": "stddev: 0.0001240846042139293",
            "extra": "mean: 69.3672323857891 usec\nrounds: 11326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3874700.553405599,
            "unit": "iter/sec",
            "range": "stddev: 8.364236930915915e-7",
            "extra": "mean: 258.0844600036543 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11853.958273826569,
            "unit": "iter/sec",
            "range": "stddev: 0.00010183664318239675",
            "extra": "mean: 84.36000675048696 usec\nrounds: 8592"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116405.3072499283,
            "unit": "iter/sec",
            "range": "stddev: 0.000027881457693361224",
            "extra": "mean: 8.590673600929101 usec\nrounds: 34130"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13586.909319687686,
            "unit": "iter/sec",
            "range": "stddev: 0.000179965990563916",
            "extra": "mean: 73.60025569251289 usec\nrounds: 13176"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3692150.51933059,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013876810591727308",
            "extra": "mean: 270.84486257057296 nsec\nrounds: 178572"
          }
        ]
      }
    ]
  }
}