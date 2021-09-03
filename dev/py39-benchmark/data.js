window.BENCHMARK_DATA = {
  "lastUpdate": 1630687272529,
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
          "id": "8834781a68c0172365d301f20d2fe3ece3961533",
          "message": ":arrow_up: Bump template dev-dependencies: `black`",
          "timestamp": "2021-09-03T16:34:29Z",
          "tree_id": "fe53c77dea34aba436b9e23c0ad3db7ad6e5a186"
        },
        "date": 1630687270009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14479.743090231917,
            "unit": "iter/sec",
            "range": "stddev: 0.00006259498329772863",
            "extra": "mean: 69.0619988053934 usec\nrounds: 10882"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3744391.5596224214,
            "unit": "iter/sec",
            "range": "stddev: 7.41740470467622e-7",
            "extra": "mean: 267.0660864592136 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11600.05521052162,
            "unit": "iter/sec",
            "range": "stddev: 0.000053496318071226906",
            "extra": "mean: 86.20648624956269 usec\nrounds: 8327"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115420.40578536903,
            "unit": "iter/sec",
            "range": "stddev: 0.000007954686236942324",
            "extra": "mean: 8.663979243493204 usec\nrounds: 40325"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14291.02170552148,
            "unit": "iter/sec",
            "range": "stddev: 0.0000427872003370748",
            "extra": "mean: 69.97400330122233 usec\nrounds: 7875"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3694389.9933901923,
            "unit": "iter/sec",
            "range": "stddev: 6.670648225504859e-7",
            "extra": "mean: 270.680681191901 nsec\nrounds: 161291"
          }
        ]
      }
    ]
  }
}