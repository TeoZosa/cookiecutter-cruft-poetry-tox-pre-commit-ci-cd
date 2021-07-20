window.BENCHMARK_DATA = {
  "lastUpdate": 1626787423856,
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
          "id": "fde4ac58fb66d352e731916136eecf3925ce628b",
          "message": "Merge pull request #250 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-20T13:12:06Z",
          "tree_id": "bf053f25f1ae76572b857692e86f2cababe180aa"
        },
        "date": 1626787422036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14923.290079494076,
            "unit": "iter/sec",
            "range": "stddev: 0.000031568569079131746",
            "extra": "mean: 67.00935213837923 usec\nrounds: 12532"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3975703.985202875,
            "unit": "iter/sec",
            "range": "stddev: 2.555285740735174e-7",
            "extra": "mean: 251.52778067010794 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12647.493154348782,
            "unit": "iter/sec",
            "range": "stddev: 0.00001502896798116455",
            "extra": "mean: 79.06705208661485 usec\nrounds: 8889"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 115757.1909644671,
            "unit": "iter/sec",
            "range": "stddev: 0.000008129750449668438",
            "extra": "mean: 8.638772171890043 usec\nrounds: 46083"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15309.361983735724,
            "unit": "iter/sec",
            "range": "stddev: 0.000011321934817842885",
            "extra": "mean: 65.31950848522456 usec\nrounds: 8191"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3892421.0149571667,
            "unit": "iter/sec",
            "range": "stddev: 2.1551538764338384e-7",
            "extra": "mean: 256.9095162515467 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}