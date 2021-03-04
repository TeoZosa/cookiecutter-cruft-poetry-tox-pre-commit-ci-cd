window.BENCHMARK_DATA = {
  "lastUpdate": 1614867606187,
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
          "id": "316fbaac8879c134cf853af51f61f43483cc495c",
          "message": "Merge pull request #97 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/poetry-1.1.5",
          "timestamp": "2021-03-04T14:15:56Z",
          "tree_id": "2210f1c009128fbfbfea47642908a41941d71027",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/316fbaac8879c134cf853af51f61f43483cc495c"
        },
        "date": 1614867604998,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15118.371614353377,
            "unit": "iter/sec",
            "range": "stddev: 0.000012617754398667358",
            "extra": "mean: 66.14468975286997 usec\nrounds: 12345"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3518330.512093375,
            "unit": "iter/sec",
            "range": "stddev: 9.928943974595022e-8",
            "extra": "mean: 284.22571346345995 nsec\nrounds: 120468"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13063.998239451712,
            "unit": "iter/sec",
            "range": "stddev: 0.00001740163935034132",
            "extra": "mean: 76.5462442409185 usec\nrounds: 5556"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 138268.9020656684,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018915342518034453",
            "extra": "mean: 7.2322842306585144 usec\nrounds: 3564"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15356.893429187565,
            "unit": "iter/sec",
            "range": "stddev: 0.000013071585739778548",
            "extra": "mean: 65.11733669385134 usec\nrounds: 13888"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4256216.723092123,
            "unit": "iter/sec",
            "range": "stddev: 5.595485787682137e-8",
            "extra": "mean: 234.95044192045896 nsec\nrounds: 99001"
          }
        ]
      }
    ]
  }
}