window.BENCHMARK_DATA = {
  "lastUpdate": 1623676723738,
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
          "id": "b66ba6bef180f757f182fe7f017791c9cf008934",
          "message": "Merge pull request #214 from TeoZosa/dependabot/pip/myst-parser-0.15.0",
          "timestamp": "2021-06-14T13:12:57Z",
          "tree_id": "068b80fedf3a5f3ca87be675eabf204de633f404"
        },
        "date": 1623676722176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14579.66756901832,
            "unit": "iter/sec",
            "range": "stddev: 0.000010976194577297842",
            "extra": "mean: 68.58866947865067 usec\nrounds: 1897"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3832099.405910891,
            "unit": "iter/sec",
            "range": "stddev: 2.5310059894544336e-7",
            "extra": "mean: 260.953564632735 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11726.077131803002,
            "unit": "iter/sec",
            "range": "stddev: 0.00001538944998734534",
            "extra": "mean: 85.28001212680408 usec\nrounds: 6597"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 116240.31852468685,
            "unit": "iter/sec",
            "range": "stddev: 0.000013751864815764424",
            "extra": "mean: 8.602866997371676 usec\nrounds: 42736"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14401.563986420053,
            "unit": "iter/sec",
            "range": "stddev: 0.000027004808728549302",
            "extra": "mean: 69.43690289075197 usec\nrounds: 10205"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3820254.594046675,
            "unit": "iter/sec",
            "range": "stddev: 2.7778456512921274e-7",
            "extra": "mean: 261.7626588444357 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}