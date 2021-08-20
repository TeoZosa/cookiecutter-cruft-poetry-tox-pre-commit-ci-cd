window.BENCHMARK_DATA = {
  "lastUpdate": 1629473226574,
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
          "id": "e2baf7151378392d966a445b5261ec9c58092fb5",
          "message": "Merge pull request #295 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.8",
          "timestamp": "2021-08-20T15:16:40Z",
          "tree_id": "d9cb0d43d4e461981844d2f39f98bd9ed851b5fa"
        },
        "date": 1629473220892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16584.563329423225,
            "unit": "iter/sec",
            "range": "stddev: 0.000004033969896372576",
            "extra": "mean: 60.29703526928965 usec\nrounds: 12532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5004598.600359615,
            "unit": "iter/sec",
            "range": "stddev: 1.2079755785492757e-8",
            "extra": "mean: 199.81622500709508 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14520.520086678616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026950268520150353",
            "extra": "mean: 68.86805665572666 usec\nrounds: 5807"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150284.99128729347,
            "unit": "iter/sec",
            "range": "stddev: 4.1533176985686606e-7",
            "extra": "mean: 6.654024406790843 usec\nrounds: 42734"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16567.62115776753,
            "unit": "iter/sec",
            "range": "stddev: 0.000006180084849071788",
            "extra": "mean: 60.35869546251436 usec\nrounds: 13532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4998219.32640747,
            "unit": "iter/sec",
            "range": "stddev: 2.443429658154201e-8",
            "extra": "mean: 200.07125231905167 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}