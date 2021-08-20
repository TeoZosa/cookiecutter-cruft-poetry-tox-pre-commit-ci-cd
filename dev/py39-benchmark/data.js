window.BENCHMARK_DATA = {
  "lastUpdate": 1629472696655,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "7b3bb9ae9fe5d69cffaab3cf51cdd72364df0655",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/docs/poetry-1.1.8",
          "timestamp": "2021-08-20T14:54:36Z",
          "tree_id": "494bc5379124fb9a6a68806b9d3895467f369456"
        },
        "date": 1629472693967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14873.00111114676,
            "unit": "iter/sec",
            "range": "stddev: 0.00005145676032016505",
            "extra": "mean: 67.23592585833516 usec\nrounds: 12611"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4046246.058985048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011514274885459094",
            "extra": "mean: 247.1426565320564 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11724.695513289576,
            "unit": "iter/sec",
            "range": "stddev: 0.0001507768418061397",
            "extra": "mean: 85.29006138082914 usec\nrounds: 8993"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111991.51545762455,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018036027053726",
            "extra": "mean: 8.929247862338116 usec\nrounds: 42919"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13944.593459555039,
            "unit": "iter/sec",
            "range": "stddev: 0.00008269125049717621",
            "extra": "mean: 71.71238106728636 usec\nrounds: 13680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4183664.3083091383,
            "unit": "iter/sec",
            "range": "stddev: 1.594011864988116e-7",
            "extra": "mean: 239.02491364183044 nsec\nrounds: 13316"
          }
        ]
      }
    ]
  }
}