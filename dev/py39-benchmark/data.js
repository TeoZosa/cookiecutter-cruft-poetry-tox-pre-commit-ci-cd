window.BENCHMARK_DATA = {
  "lastUpdate": 1630074017974,
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
          "id": "ef2ec6fe3abda2bb75428966beaf58491dc941d4",
          "message": "Merge pull request #303 from TeoZosa/dependabot/pip/hypothesis-6.16.0",
          "timestamp": "2021-08-27T13:19:15Z",
          "tree_id": "b1229171ec25856b5488496af19ac227ae6550c9"
        },
        "date": 1630074014955,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15144.743731009492,
            "unit": "iter/sec",
            "range": "stddev: 0.000029433193115521368",
            "extra": "mean: 66.02950949592223 usec\nrounds: 7003"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4438463.42316637,
            "unit": "iter/sec",
            "range": "stddev: 3.9404948779066645e-7",
            "extra": "mean: 225.30319722353568 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12644.157753368077,
            "unit": "iter/sec",
            "range": "stddev: 0.000029544291014883273",
            "extra": "mean: 79.08790917557366 usec\nrounds: 5362"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 137195.6673972512,
            "unit": "iter/sec",
            "range": "stddev: 0.000005645707702362256",
            "extra": "mean: 7.288859910601197 usec\nrounds: 16104"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14716.4618727887,
            "unit": "iter/sec",
            "range": "stddev: 0.00008253235135376809",
            "extra": "mean: 67.95111546811657 usec\nrounds: 6452"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4302663.614996182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014993904094033967",
            "extra": "mean: 232.41417165751542 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}