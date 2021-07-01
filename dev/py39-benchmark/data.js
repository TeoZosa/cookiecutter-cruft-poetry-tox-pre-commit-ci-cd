window.BENCHMARK_DATA = {
  "lastUpdate": 1625146159537,
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
          "id": "203fa5155842a1f62bfbb9cc77bd73cbb0ff2434",
          "message": "Merge pull request #238 from TeoZosa/dependabot/pip/pylint-2.9.3",
          "timestamp": "2021-07-01T13:18:08Z",
          "tree_id": "258afc84172738bfdf44f3687d5d73873f87ffc5"
        },
        "date": 1625146157996,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15626.462558257837,
            "unit": "iter/sec",
            "range": "stddev: 0.000022776645760058518",
            "extra": "mean: 63.99400992206952 usec\nrounds: 6954"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4192210.727361938,
            "unit": "iter/sec",
            "range": "stddev: 6.81518845373927e-8",
            "extra": "mean: 238.53762728884897 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13882.64438365459,
            "unit": "iter/sec",
            "range": "stddev: 0.000010899470205789103",
            "extra": "mean: 72.03238607605616 usec\nrounds: 5056"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130190.6296157359,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033298585761602893",
            "extra": "mean: 7.6810443497473635 usec\nrounds: 32785"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14847.694930143467,
            "unit": "iter/sec",
            "range": "stddev: 0.00014219545413596764",
            "extra": "mean: 67.35052172777485 usec\nrounds: 7686"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3993796.6074608825,
            "unit": "iter/sec",
            "range": "stddev: 5.923847713069231e-8",
            "extra": "mean: 250.38831425012765 nsec\nrounds: 65781"
          }
        ]
      }
    ]
  }
}