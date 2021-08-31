window.BENCHMARK_DATA = {
  "lastUpdate": 1630418460234,
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
          "id": "2c4c6a3580d07801d91bef331979387b3f6f4383",
          "message": "Merge pull request #312 from TeoZosa/dependabot/pip/pytest-6.2.5",
          "timestamp": "2021-08-31T13:44:33Z",
          "tree_id": "20494f9e4c7ad44b728a7596c699f0ee09b9cbe5"
        },
        "date": 1630418457798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14632.748630560169,
            "unit": "iter/sec",
            "range": "stddev: 0.000018397097416918645",
            "extra": "mean: 68.33986049015579 usec\nrounds: 10071"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3677440.0461022607,
            "unit": "iter/sec",
            "range": "stddev: 2.8255895857830935e-7",
            "extra": "mean: 271.92829453734987 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11455.49455735341,
            "unit": "iter/sec",
            "range": "stddev: 0.00010917040871871037",
            "extra": "mean: 87.2943542501261 usec\nrounds: 8000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 114452.06148989244,
            "unit": "iter/sec",
            "range": "stddev: 0.000007255114782422448",
            "extra": "mean: 8.73728255290808 usec\nrounds: 43291"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14111.513926082216,
            "unit": "iter/sec",
            "range": "stddev: 0.000028018131543821207",
            "extra": "mean: 70.86411884919781 usec\nrounds: 11014"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4161470.0543535906,
            "unit": "iter/sec",
            "range": "stddev: 2.327360845321862e-7",
            "extra": "mean: 240.29969864947932 nsec\nrounds: 166667"
          }
        ]
      }
    ]
  }
}