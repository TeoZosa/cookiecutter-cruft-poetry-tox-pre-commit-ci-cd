window.BENCHMARK_DATA = {
  "lastUpdate": 1623071880751,
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
          "id": "3a0ec1a9aa3365fab7be4bb1473ab2ca94f2556b",
          "message": "Merge pull request #203 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.4",
          "timestamp": "2021-06-07T13:11:34Z",
          "tree_id": "165f2bd693f517429c36aaff7c56992c19452cee"
        },
        "date": 1623071878989,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 12824.407871061352,
            "unit": "iter/sec",
            "range": "stddev: 0.00016030255380969434",
            "extra": "mean: 77.97630970990318 usec\nrounds: 3203"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 1736609.1952022957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000115543682777996",
            "extra": "mean: 575.8347950492748 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11634.626298967021,
            "unit": "iter/sec",
            "range": "stddev: 0.00006151292781373925",
            "extra": "mean: 85.95033259373228 usec\nrounds: 9017"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 102644.20543956046,
            "unit": "iter/sec",
            "range": "stddev: 0.000016461132214581043",
            "extra": "mean: 9.742391162926635 usec\nrounds: 28901"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13903.251249589524,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850491342393638",
            "extra": "mean: 71.92562243522167 usec\nrounds: 7943"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3633363.6766899824,
            "unit": "iter/sec",
            "range": "stddev: 9.494143358245443e-7",
            "extra": "mean: 275.2270592718041 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}