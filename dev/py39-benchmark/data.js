window.BENCHMARK_DATA = {
  "lastUpdate": 1629472147872,
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
          "id": "37415665c589a08b097bca4e399dae187e58cfae",
          "message": "Merge pull request #296 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.8",
          "timestamp": "2021-08-20T14:19:00Z",
          "tree_id": "fceda3553cb3cb791e34c2c70bdaa3790a60eab3"
        },
        "date": 1629472144958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15027.980206534588,
            "unit": "iter/sec",
            "range": "stddev: 0.00004358151051829514",
            "extra": "mean: 66.5425417292719 usec\nrounds: 11934"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3944448.452047891,
            "unit": "iter/sec",
            "range": "stddev: 5.442893684342004e-7",
            "extra": "mean: 253.5208691802822 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12324.185030602239,
            "unit": "iter/sec",
            "range": "stddev: 0.00003063679852168613",
            "extra": "mean: 81.14126796351204 usec\nrounds: 13263"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120079.06513877214,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644245462953159",
            "extra": "mean: 8.327846313962612 usec\nrounds: 34603"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14866.71225709863,
            "unit": "iter/sec",
            "range": "stddev: 0.000059269678849322355",
            "extra": "mean: 67.26436771670987 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3944842.817060379,
            "unit": "iter/sec",
            "range": "stddev: 0.000001282636770449841",
            "extra": "mean: 253.49552475806607 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}