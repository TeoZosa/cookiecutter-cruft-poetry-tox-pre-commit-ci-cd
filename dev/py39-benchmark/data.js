window.BENCHMARK_DATA = {
  "lastUpdate": 1625492427742,
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
          "id": "dd0535440881d0e57d05b62b59892c5f1917369f",
          "message": "Merge pull request #240 from TeoZosa/dependabot/pip/importlib-metadata-4.6.1",
          "timestamp": "2021-07-05T13:32:12Z",
          "tree_id": "7c6039f56d80eb76a797bce854cc9bdeb36c010a"
        },
        "date": 1625492426144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14571.214163260182,
            "unit": "iter/sec",
            "range": "stddev: 0.00004797329085580724",
            "extra": "mean: 68.62846079919662 usec\nrounds: 11849"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3861988.8557382557,
            "unit": "iter/sec",
            "range": "stddev: 5.84166862574521e-7",
            "extra": "mean: 258.93394242041904 nsec\nrounds: 35460"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11842.620228123653,
            "unit": "iter/sec",
            "range": "stddev: 0.00003451335014495951",
            "extra": "mean: 84.44077245888685 usec\nrounds: 8482"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117862.1938151416,
            "unit": "iter/sec",
            "range": "stddev: 0.00003571227992913328",
            "extra": "mean: 8.48448486856123 usec\nrounds: 25840"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14625.551706130456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001705946839460741",
            "extra": "mean: 68.37348908901942 usec\nrounds: 7148"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4055168.856013285,
            "unit": "iter/sec",
            "range": "stddev: 4.099843528399471e-7",
            "extra": "mean: 246.5988558076422 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}