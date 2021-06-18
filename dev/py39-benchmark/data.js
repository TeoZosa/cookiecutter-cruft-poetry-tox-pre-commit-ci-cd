window.BENCHMARK_DATA = {
  "lastUpdate": 1624023406128,
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
          "id": "15488b8754ae74ff20d5e1ff29090e82321f757d",
          "message": "Merge pull request #218 from TeoZosa/dependabot/pip/myst-parser-0.15.1",
          "timestamp": "2021-06-18T13:29:08Z",
          "tree_id": "2fba80167fddbdcefadc25324ab5c8f1f0ca27ef"
        },
        "date": 1624023404514,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15081.222290611662,
            "unit": "iter/sec",
            "range": "stddev: 0.000020135397323012242",
            "extra": "mean: 66.30762286572212 usec\nrounds: 11948"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3683968.806242079,
            "unit": "iter/sec",
            "range": "stddev: 5.726179197506771e-7",
            "extra": "mean: 271.4463809535015 nsec\nrounds: 5121"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12068.76785066194,
            "unit": "iter/sec",
            "range": "stddev: 0.00003519846809088197",
            "extra": "mean: 82.858499920947 usec\nrounds: 6345"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120086.32180640822,
            "unit": "iter/sec",
            "range": "stddev: 0.000008498589187131362",
            "extra": "mean: 8.327343072528318 usec\nrounds: 45247"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14790.847265711222,
            "unit": "iter/sec",
            "range": "stddev: 0.00003735678403085763",
            "extra": "mean: 67.60937910015764 usec\nrounds: 12469"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3863569.292612877,
            "unit": "iter/sec",
            "range": "stddev: 4.123780063873366e-7",
            "extra": "mean: 258.82802255194656 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}