window.BENCHMARK_DATA = {
  "lastUpdate": 1629124130410,
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
          "id": "8dd499ecffde17b475e75ffd2bf5c25aa035b143",
          "message": "Merge pull request #284 from TeoZosa/dependabot/pip/pygments-2.10.0",
          "timestamp": "2021-08-16T13:57:45Z",
          "tree_id": "dfa042bf8dcb4c7ebdd0d116b8106be26f1e8e5b"
        },
        "date": 1629124128024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15640.542140921241,
            "unit": "iter/sec",
            "range": "stddev: 0.000009004464330270208",
            "extra": "mean: 63.93640265088019 usec\nrounds: 11695"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4007999.047060552,
            "unit": "iter/sec",
            "range": "stddev: 3.3049158046156835e-8",
            "extra": "mean: 249.50105732535656 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13665.250016938484,
            "unit": "iter/sec",
            "range": "stddev: 0.000012167156183089887",
            "extra": "mean: 73.1783171738878 usec\nrounds: 8210"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130789.42362461513,
            "unit": "iter/sec",
            "range": "stddev: 7.482004407658816e-7",
            "extra": "mean: 7.645878177964504 usec\nrounds: 38310"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15796.190514736454,
            "unit": "iter/sec",
            "range": "stddev: 0.000007071203905456356",
            "extra": "mean: 63.306402835993154 usec\nrounds: 4796"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3907469.7451523957,
            "unit": "iter/sec",
            "range": "stddev: 3.4541133333004694e-8",
            "extra": "mean: 255.92008773435288 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}