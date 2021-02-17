window.BENCHMARK_DATA = {
  "lastUpdate": 1613571405452,
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
          "id": "f5c009126d7ebe451ac20e06e747b8bcf09a7e15",
          "message": "Merge pull request #75 from TeoZosa/dependabot/pip/sphinx-3.5.1",
          "timestamp": "2021-02-17T14:12:33Z",
          "tree_id": "49cefc1f3d60d46d17867c8bc6e764dec9182a4f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/f5c009126d7ebe451ac20e06e747b8bcf09a7e15"
        },
        "date": 1613571404099,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14640.114886797364,
            "unit": "iter/sec",
            "range": "stddev: 0.000026762206091144356",
            "extra": "mean: 68.30547490455913 usec\nrounds: 12034"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4551560.704718225,
            "unit": "iter/sec",
            "range": "stddev: 1.8712744297996298e-7",
            "extra": "mean: 219.7048583716458 nsec\nrounds: 53767"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13035.495376907895,
            "unit": "iter/sec",
            "range": "stddev: 0.00005348600506009202",
            "extra": "mean: 76.71361701922575 usec\nrounds: 10353"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 194761.9690924355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000076230842738154995",
            "extra": "mean: 5.134472631694294 usec\nrounds: 57804"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14636.748410691978,
            "unit": "iter/sec",
            "range": "stddev: 0.00003154415542723158",
            "extra": "mean: 68.32118527565257 usec\nrounds: 13909"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4354193.444138401,
            "unit": "iter/sec",
            "range": "stddev: 4.104568193095451e-7",
            "extra": "mean: 229.6636593733986 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}