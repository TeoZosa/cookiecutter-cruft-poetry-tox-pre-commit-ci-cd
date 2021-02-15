window.BENCHMARK_DATA = {
  "lastUpdate": 1613428463527,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9185a1d7cfa38b0ad88e7cc918c8eab68e4ade00",
          "message": "Merge pull request #64 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.0.0\n\n⬆️ Bump JamesIves/github-pages-deploy-action from 3.7.1 to 4.0.0",
          "timestamp": "2021-02-15T14:30:26-08:00",
          "tree_id": "cee5e42c997c8baa86287caf469d6522ee675c4c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/9185a1d7cfa38b0ad88e7cc918c8eab68e4ade00"
        },
        "date": 1613428462456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14588.693857888851,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021485942659863",
            "extra": "mean: 68.54623242774053 usec\nrounds: 12150"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4078179.487557105,
            "unit": "iter/sec",
            "range": "stddev: 2.2321469468141673e-7",
            "extra": "mean: 245.2074517687314 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13928.642747550457,
            "unit": "iter/sec",
            "range": "stddev: 0.000011349826951444927",
            "extra": "mean: 71.7945041828188 usec\nrounds: 9921"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 184255.67107428782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011610555120866252",
            "extra": "mean: 5.427241366138587 usec\nrounds: 44244"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15098.478578403483,
            "unit": "iter/sec",
            "range": "stddev: 0.000026487109381355684",
            "extra": "mean: 66.23183884437053 usec\nrounds: 11976"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4093156.621157275,
            "unit": "iter/sec",
            "range": "stddev: 3.8940295697487316e-8",
            "extra": "mean: 244.3102213166825 nsec\nrounds: 200000"
          }
        ]
      }
    ]
  }
}