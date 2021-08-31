window.BENCHMARK_DATA = {
  "lastUpdate": 1630417027546,
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
          "id": "62998686322ebecf8945bd0dea9656e37c9f3196",
          "message": "Merge pull request #311 from TeoZosa/dependabot/pip/hypothesis-6.17.4",
          "timestamp": "2021-08-31T13:15:54Z",
          "tree_id": "441bb8e8b640be45dc49611bd2a50a1e4b0d28d8"
        },
        "date": 1630417025262,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14554.36670809273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002107763434149269",
            "extra": "mean: 68.70790190025689 usec\nrounds: 6789"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4125490.467372746,
            "unit": "iter/sec",
            "range": "stddev: 7.0081389303414e-7",
            "extra": "mean: 242.39542132245393 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12532.546864578266,
            "unit": "iter/sec",
            "range": "stddev: 0.000021483871540029305",
            "extra": "mean: 79.79224101897273 usec\nrounds: 8045"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135674.14861285352,
            "unit": "iter/sec",
            "range": "stddev: 0.000005223929137202032",
            "extra": "mean: 7.370600886197577 usec\nrounds: 26178"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14719.988924443125,
            "unit": "iter/sec",
            "range": "stddev: 0.00002072833112642471",
            "extra": "mean: 67.93483372392083 usec\nrounds: 8540"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4274822.084063494,
            "unit": "iter/sec",
            "range": "stddev: 4.349102020020483e-7",
            "extra": "mean: 233.92786420982324 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}