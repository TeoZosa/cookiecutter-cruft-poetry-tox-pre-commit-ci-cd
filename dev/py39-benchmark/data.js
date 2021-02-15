window.BENCHMARK_DATA = {
  "lastUpdate": 1613398653252,
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
          "id": "5e0e3857f865b9a9f1f0d72a1ad52e20edb4ac72",
          "message": "Merge pull request #72 from TeoZosa/dependabot/pip/myst-parser-0.13.5",
          "timestamp": "2021-02-15T14:12:58Z",
          "tree_id": "800c460f5a58eb16f4decdf3593a2dabae9375f0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5e0e3857f865b9a9f1f0d72a1ad52e20edb4ac72"
        },
        "date": 1613398652390,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14853.231630075597,
            "unit": "iter/sec",
            "range": "stddev: 0.00006249734797107116",
            "extra": "mean: 67.32541610508166 usec\nrounds: 11723"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3811459.9780117087,
            "unit": "iter/sec",
            "range": "stddev: 5.915247087759432e-7",
            "extra": "mean: 262.36665366255346 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12918.899304647153,
            "unit": "iter/sec",
            "range": "stddev: 0.00010544196594273027",
            "extra": "mean: 77.40597526294539 usec\nrounds: 9217"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 171766.50746857256,
            "unit": "iter/sec",
            "range": "stddev: 0.000006134952083294664",
            "extra": "mean: 5.821856744586636 usec\nrounds: 48075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14813.801186609497,
            "unit": "iter/sec",
            "range": "stddev: 0.000036878580770774376",
            "extra": "mean: 67.50461865951873 usec\nrounds: 6131"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3860531.594469943,
            "unit": "iter/sec",
            "range": "stddev: 7.847224115739879e-7",
            "extra": "mean: 259.03168398686654 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}