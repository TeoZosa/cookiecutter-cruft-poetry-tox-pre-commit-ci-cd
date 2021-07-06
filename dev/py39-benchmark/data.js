window.BENCHMARK_DATA = {
  "lastUpdate": 1625577935734,
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
          "id": "42db373a691a7388a517dd128d6d5038d4eb455b",
          "message": "Merge pull request #241 from TeoZosa/dependabot/pip/sphinx-4.0.3",
          "timestamp": "2021-07-06T13:16:23Z",
          "tree_id": "d15b2c7ddf32b340c7872aed1c8bc3d5227f11d1"
        },
        "date": 1625577934081,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15439.786275336817,
            "unit": "iter/sec",
            "range": "stddev: 0.000027313051583398222",
            "extra": "mean: 64.76773591078646 usec\nrounds: 11587"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4085206.7958096797,
            "unit": "iter/sec",
            "range": "stddev: 1.5945443130429343e-8",
            "extra": "mean: 244.7856497801983 nsec\nrounds: 199961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12532.920778394055,
            "unit": "iter/sec",
            "range": "stddev: 0.00003681987432024467",
            "extra": "mean: 79.78986045486982 usec\nrounds: 6901"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 128543.13105894672,
            "unit": "iter/sec",
            "range": "stddev: 4.897705534089031e-7",
            "extra": "mean: 7.779489979448412 usec\nrounds: 42014"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13758.655623946539,
            "unit": "iter/sec",
            "range": "stddev: 0.00004121248123203868",
            "extra": "mean: 72.68151971617992 usec\nrounds: 9434"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3838635.1215727935,
            "unit": "iter/sec",
            "range": "stddev: 4.837699753681892e-8",
            "extra": "mean: 260.50926132053985 nsec\nrounds: 4535"
          }
        ]
      }
    ]
  }
}