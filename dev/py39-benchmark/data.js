window.BENCHMARK_DATA = {
  "lastUpdate": 1623450528601,
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
          "id": "f0781c6f8b322e86def79d41f819cfc87493f453",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-06-11T22:24:28Z",
          "tree_id": "671b9de14012d9ae3a1704cd1066a9e5be8bd85c"
        },
        "date": 1623450527134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13967.656366735842,
            "unit": "iter/sec",
            "range": "stddev: 0.000012922416586633265",
            "extra": "mean: 71.59397208407226 usec\nrounds: 6448"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5049875.008201371,
            "unit": "iter/sec",
            "range": "stddev: 9.108484679483458e-9",
            "extra": "mean: 198.0247032600756 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12342.1631865493,
            "unit": "iter/sec",
            "range": "stddev: 0.000018240068118341766",
            "extra": "mean: 81.02307390408004 usec\nrounds: 5886"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 148448.319102778,
            "unit": "iter/sec",
            "range": "stddev: 8.151713409189358e-7",
            "extra": "mean: 6.73635111562059 usec\nrounds: 29674"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13884.35239942256,
            "unit": "iter/sec",
            "range": "stddev: 0.00000895979025570794",
            "extra": "mean: 72.02352484524876 usec\nrounds: 14389"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5022940.8130459795,
            "unit": "iter/sec",
            "range": "stddev: 8.82775071882147e-9",
            "extra": "mean: 199.08655849616804 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}