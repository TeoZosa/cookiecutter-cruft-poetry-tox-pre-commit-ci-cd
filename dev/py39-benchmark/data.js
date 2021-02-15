window.BENCHMARK_DATA = {
  "lastUpdate": 1613399464046,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbe7ba7ace92bb315ba7131f93654ae1714241d8",
          "message": "Merge pull request #65 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.10.1",
          "timestamp": "2021-02-15T14:26:46Z",
          "tree_id": "78acac12f1ad13b8a49f26fdca807979b4eaecca",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/bbe7ba7ace92bb315ba7131f93654ae1714241d8"
        },
        "date": 1613399462933,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15838.368687771148,
            "unit": "iter/sec",
            "range": "stddev: 0.000017684505642759754",
            "extra": "mean: 63.137815498139204 usec\nrounds: 12092"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3889236.0150858485,
            "unit": "iter/sec",
            "range": "stddev: 5.236654744777013e-8",
            "extra": "mean: 257.1199063572198 nsec\nrounds: 11350"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13049.466417840942,
            "unit": "iter/sec",
            "range": "stddev: 0.00012588415365571705",
            "extra": "mean: 76.63148576196357 usec\nrounds: 9587"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154429.00147685708,
            "unit": "iter/sec",
            "range": "stddev: 0.000026762942996722994",
            "extra": "mean: 6.475467628726856 usec\nrounds: 3259"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15282.40636487689,
            "unit": "iter/sec",
            "range": "stddev: 0.000055361338749318514",
            "extra": "mean: 65.43472121630472 usec\nrounds: 13315"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3945125.7113699815,
            "unit": "iter/sec",
            "range": "stddev: 2.596811388634273e-8",
            "extra": "mean: 253.47734727892103 nsec\nrounds: 158705"
          }
        ]
      }
    ]
  }
}